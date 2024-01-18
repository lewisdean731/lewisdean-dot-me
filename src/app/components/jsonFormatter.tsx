import Link from 'next/link';
import React from 'react';

interface JsonFormatterProps {
  jsonData: Record<string, unknown>;
}

const JsonFormatter: React.FC<JsonFormatterProps> = ({ jsonData }) => {
  const formatJson = (data: Record<string, unknown>) => {
    return JSON.stringify(data, null, 2);
  };

  const renderLinks = (text: string) => {
    const urlWithLabelRegex = /\[([^\]]+)\](https?:\/\/[^\s,"]+)/g;

    return text.split(urlWithLabelRegex).map((part, index) => {
      if (index % 3 === 1) {
        // Part is the label, don't render it
        return null
      } else if (index % 3 === 2) {
        // Part is the URL, render it
        return (
          <Link
            key={index}
            className="text-light underline hover:text-blue2"
            href={text.split(urlWithLabelRegex)[index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.split(urlWithLabelRegex)[index - 1]}
          </Link>
        );
      } else {
        // Part is regular text, keep it as is
        return part;
      }
    });
  };

  const renderFormattedJson = () => {
    const formattedJson = formatJson(jsonData);
    const jsonWithLinks = renderLinks(formattedJson);

    return <pre>{jsonWithLinks}</pre>;
  };

  return <div>{renderFormattedJson()}</div>;
};

export default JsonFormatter;
