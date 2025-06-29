export interface RefPageProps {
  title: string;
  text: string;
  description: PortableTextBlock<PortableTextMarkDefinition, ArbitraryTypedObject | PortableTextSpan, string, string>[];
  button: string;
  buttonHref: string;
}
