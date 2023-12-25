'use client'

import React, { useState } from 'react';
import { Drawer, Button, Menu, Input } from 'antd';
import { MenuFoldOutlined, HomeOutlined, DollarOutlined, GiftOutlined, IeOutlined, SaveOutlined, QuestionOutlined, SubnodeOutlined, EyeOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const { SubMenu } = Menu;

type Props = {
  name: string;
};


const items = [
  {
    label: <Link href='/'>Trang chủ</Link>,
    key: '1',
    icon: <HomeOutlined />,
  },
  {
    label: <Link href='/price-list'>Bảng giá xe</Link>,
    key: '2',
    icon: <DollarOutlined />,
  },
  {
    label: < Link href='/product'>Sản phẩm mới</Link>,
    key: '4',
    icon: <SubnodeOutlined />,
  },
  {
    label: <Link href='/offer'>Khuyến mãi</Link>,
    key: '5',
    icon: <GiftOutlined />,
  },
  {
    label: <Link href='/news'>Tin tức</Link>,
    key: '6',
    icon: <IeOutlined />,
  },
  {
    label: 'Dịch vụ - Hậu mãi',
    key: 'sub1',
    icon: <SaveOutlined />,
    children: [
      { label: <Link href='/service'>Dịch vụ</Link>, key: '7-1' },
      { label: <Link href='/service/accessory'>Phụ tùng & Phụ kiện</Link>, key: '7-2' },
      { label: <Link href='/service/policy'>Chính sách Bảo hành</Link>, key: '7-3' },
    ],
  },
  {
    label: <Link href='/intro'>Giới Thiệu</Link>,
    key: '8',
    icon: <EyeOutlined />,
  },
  {
    label: <Link href='faq'>Hỏi đáp</Link>,
    key: '9',
    icon: <QuestionOutlined />,
  },
];

const HeaderDrawer = ({ name }: Props) => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  console.log(pathname)

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const getSelectedKey = (pathname: string) => {
    switch (pathname) {
      case '/':
        return '1';
      case '/price-list':
        return '2';
      case '/product':
        return '4';
      case '/offer':
        return '5';
      case '/news':
        return '6';
      case '/service':
        return '7-1';
      case '/service/accessory':
        return '7-2';
      case '/service/policy':
        return '7-3';
      case '/intro':
        return '8';
      case '/faq':
        return '9';
      default:
        return '';
    }
  };


  return (
    <>
      <Button onClick={showDrawer} icon={name === 'drawer' ? <MenuFoldOutlined /> : <SearchOutlined />}></Button>
      <Drawer
        placement="top"
        onClose={onClose}
        open={visible}
      >
        {name === 'drawer' && (
          <Menu items={items} mode="inline" selectedKeys={[getSelectedKey(pathname)]} defaultSelectedKeys={['1']} />
        )}
        {name === 'search' && (
          <Input placeholder="Search..." />
        )}
      </Drawer>
    </>
  );
};

export default HeaderDrawer;
