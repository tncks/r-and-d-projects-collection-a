
const UpdateSources = {
  CALENDAR_INIT : 'calendarInit',
  TODAY_PRESS : 'todayPress',
  LIST_DRAG : 'listDrag',
  DAY_PRESS : 'dayPress',
  PAGE_SCROLL : 'pageScroll',
  WEEK_SCROLL : 'weekScroll',
  PROP_UPDATE : 'propUpdate'
}


export interface CalendarContextProps {
  date: string;
  prevDate: string;
  setDate: (date: string, source: UpdateSources) => void;
  updateSource: UpdateSources;
  setDisabled: (disable: boolean) => void;
  numberOfDays?: number;
  timelineLeftInset?: number;
}