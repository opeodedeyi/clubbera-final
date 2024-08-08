'use client';

import { useState, useEffect } from 'react';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import style from './Pagination.module.css';

export default function PaginationFull({ totalPages, currentPage, goToNextPage, goToPreviousPage, goToPage }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    const getPageNumbers = () => {
        const pageNumbers = [];
        if (isMobile) {
            if (currentPage <= 3) {
                for (let i = 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else if (currentPage >= totalPages - 2) {
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    pageNumbers.push(i);
                }
            }
        } else {
            if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                if (currentPage <= 4) {
                    for (let i = 1; i <= 5; i++) {
                        pageNumbers.push(i);
                    }
                    pageNumbers.push('...');
                    pageNumbers.push(totalPages);
                } else if (currentPage >= totalPages - 3) {
                    pageNumbers.push(1);
                    pageNumbers.push('...');
                    for (let i = totalPages - 4; i <= totalPages; i++) {
                        pageNumbers.push(i);
                    }
                } else {
                    pageNumbers.push(1);
                    pageNumbers.push('...');
                    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                        pageNumbers.push(i);
                    }
                    pageNumbers.push('...');
                    pageNumbers.push(totalPages);
                }
            }
        }
        return pageNumbers;
    };

    return (
        <div className={style.paginationFullContainer}>
            <button 
                className={style.pageNavigationButton}
                onClick={goToPreviousPage}
                disabled={currentPage <= 1}>
                <HiOutlineArrowLeft />
                <span>Previous</span>
            </button>

            <div className={style.pageNumbersContainer}>
                {getPageNumbers().map((number, index) => (
                    <button 
                        key={index}
                        className={currentPage === number ? style.activePageNumber : style.pageNumber}
                        onClick={() => goToPage(number)}
                        disabled={number === '...'}>
                        {number}
                    </button>
                ))}
            </div>

            <button 
                className={style.pageNavigationButton}
                onClick={goToNextPage}
                disabled={currentPage >= totalPages}>
                <span>Next</span>
                <HiOutlineArrowRight />
            </button>
        </div>
    )
}