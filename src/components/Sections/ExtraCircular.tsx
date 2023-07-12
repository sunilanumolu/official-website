// import classNames from 'classnames';
import {FC, memo,} from 'react';

// import {isApple, isMobile} from '../../config';
import {extracirculars,SectionId} from '../../data/data';
// import {ExtraCircularItem} from '../../data/dataDef';
import Section from '../Layout/Section';

const ExtraCircular: FC = memo(() => {
    const {title, data} = extracirculars;
    return (
        <Section className='bg-gray-600 text-white' sectionId={SectionId.ExtraCircular}>
            <div className="flex justify-center -mt-10 mb-6">
                <h1 className="text-2xl font-bold border-b-2 border-orange-400">{title}</h1>
            </div>
            <div className='flex flex-col divide-y divide-slate-500  '>
            {data?.map((item) => (
                <div className='grid md:grid-cols-2 flex-row mb-10 pt-10'>
                    <div className='flex flex-col pb-4'>
                    <h2 className='text-lg font-bold'>{item?.title}</h2>
                    <div className='flex gap-x-2 justify-start'>
                        <span className='text-sm font-medium italic'>{item?.place}</span>
                        <span>•</span>
                        <span className='text-sm'>{item?.time}</span>
                    </div>
                    </div>
                    <div className='text-base'>
                    {item?.description}
                    </div>
                </div>
            ))}
            </div>
        </Section>
    )
});

ExtraCircular.displayName = 'ExtraCirculars';
export default ExtraCircular;