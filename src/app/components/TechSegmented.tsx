import React, { useState } from 'react'
import { Avatar, ConfigProvider, Segmented } from 'antd';
import '../assets/css/segmented-custom.css'
import { SegmentedValue } from 'antd/es/segmented';

type TechItem = {
  title: string;
  url: string;
  gif: string;
  content: {
    title: string;
    paragraph: string;
  };
};


type Props = {
  arrImgTech: TechItem[]
}


const TechSegmented = ({ arrImgTech }: Props) => {
  const [selectedItem, setSelectedItem] = useState<TechItem>(arrImgTech[0]);

  const options = arrImgTech.map((item, index) => ({
    label: (
      <div className='segmented-option' style={{ padding: 4 }}>
        <Avatar src={item.url} />
        <div>{item.title}</div>
      </div>
    ),
    value: `Tech${index + 1}`,
  }));

  const onSegmentedChange = (value: SegmentedValue) => {
    const selectedTech = arrImgTech.find(item => `Tech${arrImgTech.indexOf(item) + 1}` === value);
    setSelectedItem(selectedTech || arrImgTech[0]);
  };


  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              // itemColor: 'rgba(0, 0, 0, 0.65)'
            },
          },
        }}
      >
        <Segmented
          defaultValue={'Tech1'}
          size='large'
          options={options}
          onChange={onSegmentedChange}
        />
      </ConfigProvider>
      {selectedItem && (
        <div className='tech-content'>
          <img src={selectedItem.gif} alt={selectedItem.title} className='w-100' />
          <h3>{selectedItem.content.title}</h3>
          <p>{selectedItem.content.paragraph}</p>
        </div>
      )}
    </>
  )
}

export default TechSegmented
