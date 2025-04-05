export interface MeetsPageData {
  title: string;
  upcomingEvents: {
    title: string;
    description: string;
    date: string;
    time: string;
    type: string;
    link: string;
  }[];
  calendarButton: string;
  calendarHref: string;
  regularActivities: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  }[];
  gallery: {
    asset: {
      _id: string;
      _ref: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt: string;
  }[];
}
