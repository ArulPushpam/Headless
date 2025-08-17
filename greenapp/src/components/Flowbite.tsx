import { JSX } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface StringField {
  value: string;
}

interface CryptoItem {
  id: string;
  title: StringField;
  subtitle: StringField;
}

interface FlowbiteProps {
  fields: {
    data: {
      item: {
        id: string;
        Title: StringField;
        subtitle: StringField;
        cryptocurrencies: {
          targetItems: CryptoItem[];
        };
      };
    };
  };
}

export const Default = (props: FlowbiteProps): JSX.Element => {
  const { item } = props.fields.data;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <Text field={item.Title} />
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-lg font-normal text-gray-500 lg:mb-12 lg:text-xl dark:text-gray-400">
            <Text field={item.subtitle} />
          </p>
        </div>

        {/* Cryptocurrencies Loop */}
        <div className="grid gap-6 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {item.cryptocurrencies?.targetItems?.map((crypto) => (
            <div
              key={crypto.id}
              className="p-4 text-primary-700 bg-primary-100 rounded-lg dark:bg-primary-900 dark:text-primary-300"
            >
              <h2 className="text-3xl font-extrabold leading-tight">{crypto.title.value}</h2>
              <span className="text-primary-500 dark:text-primary-400">
                {crypto.subtitle.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
