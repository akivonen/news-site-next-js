import { DUMMY_NEWS } from '@/dummy-news';

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce((years, currentNews) => {
    const year = new Date(currentNews.date).getFullYear();
    if(!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, currentNews) => {
    const currentNewsYear = new Date(currentNews.date).getFullYear();
    if (currentNewsYear === +year) {
      const currentNewsMonth = new Date(currentNews.date).getMonth() + 1;
      !months.includes(currentNewsMonth) && months.push(currentNewsMonth);
    }
    return months;
  }, []).sort((a, b) => a - b);
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter((currentNews) => new Date(currentNews).getFullYear === +year);
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((currentNews) => {
    const currentNewsDate = new Date(currentNews.date);
    const currentNewsYear = currentNewsDate.getFullYear();
    const currentNewsMonth = currentNewsDate.getMonth() + 1;
    return currentNewsYear === +year && currentNewsMonth === +month;
  });
}