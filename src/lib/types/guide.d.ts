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
  leads: {
    leadName: string;
    leadDescription: string;
    leadButton: string;
    leadHref: string;
  }[];
  checklist: CheckProps[];
}

export interface CheckProps {
  check: string;
  description: PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>[];
  examples?: {
    exampleButton: string;
    exampleHref: string;
  }[];
  button: {
    text: string;
    href: string;
  };
}
