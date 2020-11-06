import Chartist, {ChartistStatic, IChartistSvg} from 'chartist';
import {committees, constituencies} from './data';
import calculateMandates from './mandates';
import constituencyTemplate from './templates/constituency.pug';
import tableTemplate from './templates/table.pug';
import './styles/styles.css';

const clearResults = (bar: ChartistStatic['Bar'], pie: ChartistStatic['Pie']) => {
	document.querySelectorAll<HTMLTableDataCellElement>('tr td:last-child').forEach((td) => {
		td.innerHTML = ''; // eslint-disable-line no-param-reassign
	});
	bar.detach();
	pie.detach();
	document.getElementById('support-bar-chart')!.innerHTML = '';
	document.getElementById('division-pie-chart')!.innerHTML = '';
	document.getElementById('constituency-results')!.innerHTML = '';
};

const displayResults = (mandates: number[]) => {
	mandates.forEach((value, index) => {
		const committeeId = committees[index].id;
		const td = document.querySelector<HTMLTableDataCellElement>(`tr.${committeeId} td:last-child`);
		if (td) td.textContent = value.toString();
	});
};

const displayUrl = (support: number[]) => {
	const searchParams = new URLSearchParams();
	support.forEach((s, i) => {
		if (s > 0) searchParams.append(committees[i].id, s.toString());
	});
	const url = `${window.location.href}?${searchParams}`;
	document.getElementById('url')!.innerHTML = `Link do wyników: ${url.link(url)}`;
};

const displayBarChart = (support: number[]) => {
	const sortedSupport = committees
		.map((c, i) => ({
			label: c.shortName,
			support: {value: support[i], className: c.id},
		}))
		.filter((s) => s.support.value && s.support.value > 0)
		.sort((a, b) => b.support.value - a.support.value);
	const barChartData = {
		labels: sortedSupport.map((ss) => ss.label),
		series: sortedSupport.map((ss) => ss.support),
	};
	const barChartOptions = {
		distributeSeries: true,
	};
	const barChart = new Chartist.Bar('#support-bar-chart', barChartData, barChartOptions);
	barChart.on('draw', (data: {type: string; element: IChartistSvg}) => {
		if (data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 30px',
			});
		}
	});
	return barChart;
};

const displayPieChart = (mandates: number[]) => {
	const sortedMandates = committees
		.map((c, i) => ({
			label: c.shortName,
			mandates: {value: mandates[i], className: c.id},
		}))
		.filter((m) => m.mandates.value && m.mandates.value > 0)
		.sort((a, b) => b.mandates.value - a.mandates.value);
	const pieChartData = {
		series: sortedMandates.map((sm) => sm.mandates),
	};
	const pieChartOptions = {
		donut: true,
		donutWidth: 60,
		startAngle: 270,
		total: 460 * 2,
		labelInterpolationFnc: (value: number, index: number) => (
			value < 15 ? '' : `${sortedMandates[index].label} ${value}`
		),
	};
	return new Chartist.Pie('#division-pie-chart', pieChartData, pieChartOptions);
};

const displayConstituencyResults = () => {
	const container = document.getElementById('constituency-results');
	constituencies.forEach((constituency, constituenyIndex) => {
		const data = (constituency.mandates && constituency.support)
			? constituency.mandates.map((mandates, committeeIndex) => ({
				committee: committees[committeeIndex].name,
				support: (constituency.support as number[])[committeeIndex],
				mandates,
			}))
			: [];
		data.sort((a, b) => b.support - a.support);
		container!.insertAdjacentHTML('beforeend', constituencyTemplate({
			number: constituenyIndex + 1,
			name: constituency.name,
			size: constituency.size,
			data,
		}));
	});
};

const validate = (inputs: NodeListOf<HTMLInputElement>, support: number[]) => {
	const supportSum = support.reduce((a, b) => a + b, 0);
	if (supportSum > 100) {
		inputs.forEach((input) => input.setCustomValidity('Suma poparcia nie może przekraczać 100%'));
		return false;
	}
	if (supportSum <= 0) {
		inputs.forEach((input) => input.setCustomValidity('Suma poparcia musi być wyższa niż 0%'));
		return false;
	}
	inputs.forEach((input) => input.setCustomValidity(''));

	return document.querySelector<HTMLFormElement>('#support-form')!.checkValidity();
};

const calculate = () => {
	const inputs = document.querySelectorAll<HTMLInputElement>('#support-form input');
	const support = Array
		.from(inputs)
		.map((input) => parseFloat(input.value))
		.map((value) => (Number.isNaN(value) ? 0 : value));

	if (!validate(inputs, support)) return;

	const mandates = calculateMandates(support);

	displayResults(mandates);

	displayUrl(support);

	const barChart = displayBarChart(support);

	const pieChart = displayPieChart(mandates);

	displayConstituencyResults();

	inputs.forEach((input) => input.addEventListener('input', () => {
		clearResults(barChart, pieChart);
	}));
};

const handleCalculateButtonClick = (event: Event) => {
	event.preventDefault();
	calculate();
};

const generateTable = () => {
	const form: HTMLElement = document.getElementById('support-form')!;
	form.insertAdjacentHTML('afterbegin', tableTemplate({
		committees,
	}));
};

const loadResultsFromUrl = () => {
	if (window.location.search) {
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.forEach((value, key) => {
			const input = document.querySelector<HTMLInputElement>(`tr.${key} td:nth-child(2) input`);
			if (input) input.value = value;
		});
		calculate();
	}
};

const bindActions = () => {
	document
		.querySelector('#calculate-button')!
		.addEventListener('click', handleCalculateButtonClick);
};

document.addEventListener('DOMContentLoaded', () => {
	generateTable();
	loadResultsFromUrl();
	bindActions();
});
