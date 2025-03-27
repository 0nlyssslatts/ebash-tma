export interface MeetsPageData {
  title: string;
  upcomingEvents: {
    title: string;
    description: string;
    date: string;
    time: string;
    type: string;
  }[];
  calendarButton: string;
  regularActivities: {
    title: string;
    description: string;
    buttonText: string;
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
