'use client'
import React from 'react';
import { Pagination } from 'antd';
import { useRouter } from 'next/navigation';

type Props = {
    total: number,
    currentPage: number,
}

const NewsPagination: React.FC<Props> = ({ total, currentPage }: Props) => {
    const { push } = useRouter();
    const handlePageChange = (page: number) => {
        push('/news?page=' + (page - 1))
    };

    return (
        <Pagination
            defaultCurrent={currentPage}
            total={total} // Total number of items
            pageSize={6} // Number of items per page
            onChange={handlePageChange} // Callback function when page changes
        />
    );
};

export default NewsPagination;
