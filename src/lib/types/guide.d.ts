export interface GuidePageData {
  header: string;
  values: {
    titleValue: string;
    descriptionValue: string;
  }[];
  mindsetREPKA: {
    titleREPKA: string;
    descriptionREPKA: string;
    hrefREPKA: string;
  }[];
  dictionary: {
    term: string;
    meaning: string;
  }[];
  checklist: {
    check: string;
  }[];
}
