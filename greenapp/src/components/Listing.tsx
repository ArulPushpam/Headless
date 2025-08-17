import { JSX } from 'react';
import { ComponentParams, ComponentRendering, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface MultiListItem {
  id: string;
  fields: {
    FeatureDescription: Field<string>;
  };
}

interface SimpleFields {
  Title: Field<string>;
  SubTitle: Field<string>;
  Description: Field<string>;
  Features: MultiListItem[];
}

interface SimpleProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: SimpleFields;
}

export const Default = (props: SimpleProps): JSX.Element => {
  const { fields } = props;

  return (
    <div className="component">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          {/* Title */}
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <Text field={fields.Title} />
          </h2>

          {/* Subtitle */}
          <p className="mb-3 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            <Text field={fields.SubTitle} />
          </p>

          {/* Description */}
          <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            <Text field={fields.Description} />
          </p>

          {/* Features Loop */}
          <div className="grid gap-8 lg:grid-cols-2">
            {fields.Features?.map((feature, index) => (
              <a
                key={index}
                href={'#'}
                className="inline-flex justify-center items-center p-5 text-base font-medium text-gray-500 bg-gray-50 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {/* Left Icon */}
                <svg
                  className="mr-3 w-5 h-5"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* your gradient paths stay the same */}
                </svg>

                {/* Feature Text */}
                <span className="w-full">
                  <Text field={feature.fields.FeatureDescription} />
                </span>

                {/* Right Arrow */}
                <svg
                  className="ml-3 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
