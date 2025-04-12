import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

import { Text } from './Text';
import { TextLight } from './TextLight';
import { TextLighter } from './TextLighter';

interface Props {
  content: PortableTextBlock[];
}

export default function CustomPortableText({ content }: Props) {
  return (
    <div className="prose max-w-none">
      <PortableText
        value={content}
        components={{
          block: {
            normal: ({ children }) => <TextLighter>{children}</TextLighter>,
            h1: ({ children }) => <Text>{children}</Text>,
            h2: ({ children }) => <TextLight>{children}</TextLight>,
          },
          list: {
            bullet: ({ children }) => (
              <ul className="list-disc pl-5 mb-4 font-montsserat text-sm font-extralight">{children}</ul>
            ),
            number: ({ children }) => (
              <ol className="list-decimal pl-5 mb-4 font-montsserat text-sm font-extralight">{children}</ol>
            ),
          },
          marks: {
            strong: ({ children }) => <strong>{children}</strong>,
            em: ({ children }) => <em>{children}</em>,
            underline: ({ children }) => <u>{children}</u>,
            'strike-through': ({ children }) => <s>{children}</s>,
            green: ({ children }) => <span className="text-textgreen">{children}</span>,
          },
        }}
      />
    </div>
  );
}
