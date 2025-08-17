import { JSX } from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  ImageField,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';
import Slider from 'react-slick';
import { Text, Link, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface SlideItem {
  id: string;
  fields: {
    Icon: ImageField;
  };
}

interface SlidersFields {
  Title: Field<string>;
  SubTitle: Field<string>;
  CTA1: LinkField;
  CTA2: LinkField;
  PartnerText: Field<string>;
  Slides: SlideItem[];
}

interface SlidersProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: SlidersFields;
}

export const Default = (props: SlidersProps): JSX.Element => {
  const { fields } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <div className="component">
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
            <div className="lg:max-w-xl xl:shrink-0">
              <div>
                <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  <Text field={fields.Title} />
                </h2>
                <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl">
                  <Text field={fields.SubTitle} />
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                {fields.CTA1 && <Link field={fields.CTA1} className="btn btn-primary" />}

                {fields.CTA2 && <Link field={fields.CTA2} className="btn btn-secondary" />}
              </div>

              <div className="mt-4 sm:border-t sm:border-gray-100 sm:mt-8 sm:pt-8 dark:border-gray-700">
                <p className="hidden text-base font-medium text-gray-500 sm:block">
                  <Text field={fields.PartnerText} />
                </p>
                <div className="flex items-center mt-3 max-w-md">
                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/greenpeace.svg"
                    alt=""
                  />
                  <img
                    className="w-auto h-8 md:h-12 mr-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/united-nations.svg"
                    alt=""
                  />
                  <img
                    className="w-auto h-8 md:h-12 mr-8 dark:invert"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/wwf.svg"
                    alt=""
                  />
                  <img
                    className="w-auto h-8 md:h-12"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/oxfam.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div id="default-carousel" className="relative w-full" data-carousel="slide">
              <Slider {...settings}>
                {fields.Slides?.map((slide) => (
                  <div key={slide.id}>
                    <Image field={slide.fields.Icon} className="w-full" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
