import { Category, RecordData } from '../RecordsExplorer';

export function getRecordData(event: string, category: Category): RecordData[] {
  if (event === '100m' && category === 'Men') {
    return [
      {
        type: 'National',
        performance: '10.09s',
        athlete: 'Gurindervir Singh',
        date: '2026-05-23',
        venue: 'Ranchi, IND',
        championship: 'Federation Cup',
        color: '#C9115F',
        numericValue: 10.09,
      },
      {
        type: 'Olympic',
        performance: '9.63s',
        athlete: 'Usain Bolt',
        date: '2012-08-05',
        venue: 'London, GBR',
        championship: 'Olympic Games',
        color: '#C0C0C0',
        numericValue: 9.63,
      },
      {
        type: 'World',
        performance: '9.58s',
        athlete: 'Usain Bolt',
        date: '2009-08-16',
        venue: 'Berlin, GER',
        championship: 'World Championships',
        color: '#CD620E',
        numericValue: 9.58,
      },
    ];
  } else if (event === 'Javelin' && category === 'Men') {
    return [
      {
        type: 'National',
        performance: '89.94m',
        athlete: 'Neeraj Chopra',
        date: '2022-08-07',
        venue: 'Stockholm, SWE',
        championship: 'Diamond League',
        color: '#C9115F',
        numericValue: 89.94,
      },
      {
        type: 'Olympic',
        performance: '90.57m',
        athlete: 'A. Thorkildsen',
        date: '2008-08-23',
        venue: 'Beijing, CHN',
        championship: 'Olympic Games',
        color: '#C0C0C0',
        numericValue: 90.57,
      },
      {
        type: 'World',
        performance: '98.48m',
        athlete: 'Jan Železný',
        date: '1996-05-25',
        venue: 'Jena, GER',
        championship: 'World Record',
        color: '#CD620E',
        numericValue: 98.48,
      },
    ];
  } else if (event === '100m' && category === 'Women') {
    return [
      {
        type: 'National',
        performance: '11.22s',
        athlete: 'Dutee Chand',
        date: '2019-05-02',
        venue: 'Patiala, IND',
        championship: 'Federation Cup',
        color: '#C9115F',
        numericValue: 11.22,
      },
      {
        type: 'Olympic',
        performance: '10.61s',
        athlete: 'Elaine Thompson',
        date: '2021-07-31',
        venue: 'Tokyo, JPN',
        championship: 'Olympic Games',
        color: '#C0C0C0',
        numericValue: 10.61,
      },
      {
        type: 'World',
        performance: '10.49s',
        athlete: 'Florence Griffith-Joyner',
        date: '1988-07-16',
        venue: 'Indianapolis, USA',
        championship: 'World Record',
        color: '#CD620E',
        numericValue: 10.49,
      },
    ];
  }

  // Default mock data
  const isTimeEvent = event.includes('m') && !event.includes('Jump') && !event.includes('Throw') && !event.includes('Put');
  const unit = isTimeEvent ? 's' : 'm';

  return [
    {
      type: 'National',
      performance: `${(Math.random() * 10 + 40).toFixed(2)}${unit}`,
      athlete: 'Indian Athlete',
      date: '2022-06-15',
      venue: 'New Delhi, IND',
      championship: 'National Championships',
      color: '#C9115F',
      numericValue: Math.random() * 10 + 40,
    },
    {
      type: 'Olympic',
      performance: `${(Math.random() * 5 + 38).toFixed(2)}${unit}`,
      athlete: 'Olympic Champion',
      date: '2021-08-08',
      venue: 'Tokyo, JPN',
      championship: 'Olympic Games',
      color: '#C0C0C0',
      numericValue: Math.random() * 5 + 38,
    },
    {
      type: 'World',
      performance: `${(Math.random() * 3 + 36).toFixed(2)}${unit}`,
      athlete: 'World Record Holder',
      date: '2019-09-28',
      venue: 'Doha, QAT',
      championship: 'World Championships',
      color: '#CD620E',
      numericValue: Math.random() * 3 + 36,
    },
  ];
}