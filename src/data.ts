import {
	PastSupport,
	Committee,
	Constituency,
} from './types';

export const pastSupport: PastSupport = {
	pis: 43.59,
	ko: 27.4,
	lewica: 12.56,
	psl: 8.55,
	konfederacja: 6.81,
};

export const committees: Committee[] = [
	{
		id: 'pis',
		name: 'Prawo i Sprawiedliwość',
		shortName: 'PiS',
		threshold: 5,
		pastSupportEquivalence: [['pis', 1]],
	},
	{
		id: 'ko',
		name: 'Koalicja Obywatelska',
		shortName: 'KO',
		threshold: 8,
		pastSupportEquivalence: [['ko', 1]],
	},
	{
		id: 'lewica',
		name: 'Lewica',
		shortName: 'Lew.',
		threshold: 5,
		pastSupportEquivalence: [['lewica', 1]],
	},
	{
		id: 'psl',
		name: 'PSL – Koalicja Polska',
		shortName: 'PSL',
		threshold: 5,
		pastSupportEquivalence: [['psl', 1]],
	},
	{
		id: 'konfederacja',
		name: 'Konfederacja',
		shortName: 'Konf.',
		threshold: 5,
		pastSupportEquivalence: [['konfederacja', 1]],
	},
	{
		id: 'mn',
		name: 'Mniejszość Niemiecka',
		shortName: 'MN',
		threshold: 0,
		pastSupportEquivalence: [],
	},
];

export const constituencies: Constituency[] = [
	{
		name: 'Legnica',
		size: 12,
		pastSupport: {
			ko: 25.02,
			konfederacja: 5.85,
			psl: 7.17,
			pis: 42.4,
			lewica: 16.43,
		},
	},
	{
		name: 'Wałbrzych',
		size: 8,
		pastSupport: {
			ko: 32.09,
			konfederacja: 5.42,
			psl: 7.25,
			pis: 40.54,
			lewica: 12.35,
		},
	},
	{
		name: 'Wrocław',
		size: 14,
		pastSupport: {
			ko: 32.8,
			konfederacja: 7.45,
			psl: 6.46,
			pis: 34.67,
			lewica: 15.41,
		},
	},
	{
		name: 'Bydgoszcz',
		size: 12,
		pastSupport: {
			ko: 31.05,
			konfederacja: 7.05,
			psl: 9.02,
			pis: 36.43,
			lewica: 15.17,
		},
	},
	{
		name: 'Toruń',
		size: 13,
		pastSupport: {
			ko: 26.42,
			konfederacja: 6.33,
			psl: 10.88,
			pis: 40.38,
			lewica: 14.83,
		},
	},
	{
		name: 'Lublin',
		size: 15,
		pastSupport: {
			ko: 19.3,
			konfederacja: 7.07,
			psl: 9.1,
			pis: 55.39,
			lewica: 7.81,
		},
	},
	{
		name: 'Chełm',
		size: 12,
		pastSupport: {
			ko: 14.8,
			konfederacja: 5.84,
			psl: 11.86,
			pis: 59.5,
			lewica: 6.83,
		},
	},
	{
		name: 'Zielona Góra',
		size: 12,
		pastSupport: {
			ko: 31.27,
			konfederacja: 7.19,
			psl: 11.63,
			pis: 34.3,
			lewica: 15.61,
		},
	},
	{
		name: 'Łódź',
		size: 10,
		pastSupport: {
			ko: 35.82,
			konfederacja: 6.65,
			psl: 4.53,
			pis: 32.9,
			lewica: 20.1,
		},
	},
	{
		name: 'Piotrków Trybunalski',
		size: 9,
		pastSupport: {
			ko: 15.64,
			konfederacja: 6.76,
			psl: 10.44,
			pis: 56.21,
			lewica: 10.95,
		},
	},
	{
		name: 'Sieradz',
		size: 12,
		pastSupport: {
			ko: 20.48,
			konfederacja: 5.88,
			psl: 10.29,
			pis: 49.81,
			lewica: 11.98,
		},
	},
	{
		name: 'Chrzanów',
		size: 8,
		pastSupport: {
			ko: 23.04,
			konfederacja: 7.06,
			psl: 7.9,
			pis: 53.48,
			lewica: 8.51,
		},
	},
	{
		name: 'Kraków',
		size: 14,
		pastSupport: {
			ko: 30.48,
			konfederacja: 7.99,
			psl: 7.27,
			pis: 39.56,
			lewica: 13.01,
		},
	},
	{
		name: 'Nowy Sącz',
		size: 10,
		pastSupport: {
			ko: 13.83,
			konfederacja: 6.95,
			psl: 7.35,
			pis: 65.8,
			lewica: 6.07,
		},
	},
	{
		name: 'Tarnów',
		size: 9,
		pastSupport: {
			ko: 14.0,
			konfederacja: 7.11,
			psl: 13.35,
			pis: 59.59,
			lewica: 5.94,
		},
	},
	{
		name: 'Płock',
		size: 10,
		pastSupport: {
			ko: 16.85,
			konfederacja: 5.24,
			psl: 15.17,
			pis: 52.45,
			lewica: 8.76,
		},
	},
	{
		name: 'Radom',
		size: 9,
		pastSupport: {
			ko: 17.15,
			konfederacja: 5.89,
			psl: 10.2,
			pis: 57.82,
			lewica: 7.43,
		},
	},
	{
		name: 'Siedlce',
		size: 12,
		pastSupport: {
			ko: 13.94,
			konfederacja: 6.49,
			psl: 11.94,
			pis: 59.76,
			lewica: 6.45,
		},
	},
	{
		name: 'Warszawa I',
		size: 20,
		pastSupport: {
			ko: 42.05,
			konfederacja: 7.51,
			psl: 4.75,
			pis: 27.49,
			lewica: 18.19,
		},
	},
	{
		name: 'Warszawa II',
		size: 12,
		pastSupport: {
			ko: 28.61,
			konfederacja: 6.63,
			psl: 8.6,
			pis: 40.89,
			lewica: 13.09,
		},
	},
	{
		name: 'Opole',
		size: 12,
		pastSupport: {
			ko: 26.71,
			konfederacja: 5.7,
			psl: 10.31,
			pis: 37.64,
			lewica: 11.74,
		},
	},
	{
		name: 'Krosno',
		size: 11,
		pastSupport: {
			ko: 15.94,
			konfederacja: 6.81,
			psl: 7.85,
			pis: 63.36,
			lewica: 6.04,
		},
	},
	{
		name: 'Rzeszów',
		size: 15,
		pastSupport: {
			ko: 14.39,
			konfederacja: 8.25,
			psl: 7.79,
			pis: 62.38,
			lewica: 6.59,
		},
	},
	{
		name: 'Białystok',
		size: 14,
		pastSupport: {
			ko: 21.04,
			konfederacja: 6.96,
			psl: 9.33,
			pis: 52.04,
			lewica: 9.09,
		},
	},
	{
		name: 'Gdańsk',
		size: 12,
		pastSupport: {
			ko: 41.31,
			konfederacja: 7.21,
			psl: 5.9,
			pis: 32.1,
			lewica: 13.47,
		},
	},
	{
		name: 'Gdynia',
		size: 14,
		pastSupport: {
			ko: 35.85,
			konfederacja: 7.3,
			psl: 7.94,
			pis: 36.43,
			lewica: 12.47,
		},
	},
	{
		name: 'Bielsko-Biała',
		size: 9,
		pastSupport: {
			ko: 27.2,
			konfederacja: 7.42,
			psl: 7.13,
			pis: 46.76,
			lewica: 11.48,
		},
	},
	{
		name: 'Częstochowa',
		size: 7,
		pastSupport: {
			ko: 22.63,
			konfederacja: 6.07,
			psl: 8.68,
			pis: 44.28,
			lewica: 15.59,
		},
	},
	{
		name: 'Gliwice',
		size: 9,
		pastSupport: {
			ko: 32.61,
			konfederacja: 7.67,
			psl: 5.99,
			pis: 37.75,
			lewica: 13.38,
		},
	},
	{
		name: 'Rybnik',
		size: 9,
		pastSupport: {
			ko: 27.71,
			konfederacja: 7.17,
			psl: 5.64,
			pis: 48.28,
			lewica: 9.68,
		},
	},
	{
		name: 'Katowice',
		size: 12,
		pastSupport: {
			ko: 37.2,
			konfederacja: 7.33,
			psl: 4.37,
			pis: 39.19,
			lewica: 11.92,
		},
	},
	{
		name: 'Sosnowiec',
		size: 9,
		pastSupport: {
			ko: 29.66,
			konfederacja: 6.45,
			psl: 4.85,
			pis: 37.13,
			lewica: 21.9,
		},
	},
	{
		name: 'Kielce',
		size: 16,
		pastSupport: {
			ko: 16.65,
			konfederacja: 5.95,
			psl: 9.88,
			pis: 55.18,
			lewica: 9.95,
		},
	},
	{
		name: 'Elbląg',
		size: 8,
		pastSupport: {
			ko: 28.43,
			konfederacja: 5.66,
			psl: 10.89,
			pis: 40.86,
			lewica: 11.64,
		},
	},
	{
		name: 'Olsztyn',
		size: 10,
		pastSupport: {
			ko: 26.46,
			konfederacja: 6.97,
			psl: 13.19,
			pis: 38.82,
			lewica: 13.84,
		},
	},
	{
		name: 'Kalisz',
		size: 12,
		pastSupport: {
			ko: 24.72,
			konfederacja: 6.57,
			psl: 12.8,
			pis: 42.48,
			lewica: 13.43,
		},
	},
	{
		name: 'Konin',
		size: 9,
		pastSupport: {
			ko: 20.48,
			konfederacja: 6.74,
			psl: 9.81,
			pis: 47.29,
			lewica: 15.04,
		},
	},
	{
		name: 'Piła',
		size: 9,
		pastSupport: {
			ko: 30.6,
			konfederacja: 6.62,
			psl: 13.86,
			pis: 35.64,
			lewica: 13.28,
		},
	},
	{
		name: 'Poznań',
		size: 10,
		pastSupport: {
			ko: 45.38,
			konfederacja: 6.61,
			psl: 6.2,
			pis: 25.33,
			lewica: 16.49,
		},
	},
	{
		name: 'Koszalin',
		size: 8,
		pastSupport: {
			ko: 32.31,
			konfederacja: 5.98,
			psl: 9.43,
			pis: 36.83,
			lewica: 15.44,
		},
	},
	{
		name: 'Szczecin',
		size: 12,
		pastSupport: {
			ko: 35.71,
			konfederacja: 6.53,
			psl: 7.4,
			pis: 35.11,
			lewica: 15.25,
		},
	},
];
