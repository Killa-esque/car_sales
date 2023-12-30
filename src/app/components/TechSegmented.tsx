import React, { useEffect, useState } from 'react';
import { Avatar, ConfigProvider, Segmented, Row, Col } from 'antd';
import '../assets/css/segmented-custom.css';
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
  const [isPhone, setIsPhone] = useState(false);
  const [isTablet, setIsTablet] = useState(false);


  const options = arrImgTech.map((item, index) => {
    let padding;
    if (isPhone) {
      padding = '2px'; // Smaller padding for phones
    } else if (isTablet) {
      padding = '10px 25px'; // Medium padding for tablets
    } else {
      padding = '12px'; // Larger padding for desktop
    }

    const optionStyle = {
      padding,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    return {
      label: (
        <div className='segmented-option' style={optionStyle}>
          <Avatar src={item.url} />
          {!(isPhone || isTablet) && <div className='title'>{item.title}</div>}
        </div>
      ),
      value: `Tech${index + 1}`,
    };
  });



  const onSegmentedChange = (value: SegmentedValue) => {
    const selectedTech = arrImgTech.find(item => `Tech${arrImgTech.indexOf(item) + 1}` === value);
    setSelectedItem(selectedTech || arrImgTech[0]);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsPhone(screenWidth <= 768);
      setIsTablet(screenWidth > 768 && screenWidth <= 1024);
    };


    // Set the initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(options)

  return (
    <>
      <ConfigProvider theme={{ components: { Segmented: {} } }}>
        <Row>
          {isPhone || isTablet ? (
            <Segmented
              defaultValue={'Tech1'}
              size='large'
              options={options}
              onChange={onSegmentedChange}
              block
            />
          ) : (
            <Segmented
              defaultValue={'Tech1'}
              size='large'
              options={options}
              onChange={onSegmentedChange}
            />
          )}
        </Row>

      </ConfigProvider>
      {selectedItem && (
        <Row>
          <Col xs={24} md={24}>
            <img src={selectedItem.gif} alt={selectedItem.title} className='w-100' />
          </Col>
          <Col xs={24} md={24}>
            <h3>{selectedItem.content.title}</h3>
            <p>{selectedItem.content.paragraph}</p>
          </Col>
        </Row>
      )}
    </>
  )
}

export default TechSegmented;
