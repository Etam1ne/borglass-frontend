import { SVGProps } from "./SVGProps";

export function Logo({ width, height }: SVGProps): JSX.Element {
    return (
        <svg width={width ?? "104"} height={height ?? "104"} viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.7252 6.53503L64.3499 27.3963" stroke="#2F6E75" strokeWidth="2" strokeLinecap="round"/>
            <path d="M58.1487 44.6295L91.8123 10.1631" stroke="#2F6E75" strokeWidth="3" strokeLinecap="round"/>
            <path d="M66.5645 44.176L95.7986 13.3376" stroke="#2F6E75" strokeWidth="2" strokeLinecap="round"/>
            <path d="M82.0674 33.2919L98.0133 16.9657" stroke="#2F6E75" strokeLinecap="round"/>
            <path d="M82.0674 38.2805L98.8992 21.0472" stroke="#2F6E75" strokeWidth="2" strokeLinecap="round"/>
            <path d="M2.781 37.8269C27.5858 59.5952 77.1953 59.5952 102 37.8269M2.781 37.8269C2.781 37.8269 4.55277 2 21.2378 2H87.2362C100.228 1.99999 102 37.8269 102 37.8269M2.781 37.8269L2 54.6067M102 37.8269V54.6067M2 54.6067C3.03701 68.0699 7.98077 85.1806 21.9184 98.8228C23.0154 99.8966 24.2568 100.858 25.7017 101.377C33.3964 104.138 38.4606 97.2889 34.8864 89.4688C34.0374 87.6113 32.5096 86.1766 30.8964 84.9242C15.1417 72.6934 6.11591 63.2392 2 54.6067ZM102 54.6067C101.71 68.074 96.8019 85.178 82.8626 98.8227C81.7656 99.8966 80.5242 100.858 79.0792 101.377C71.5396 104.081 66.5042 97.564 69.376 89.9455C70.2008 87.7574 71.9626 86.0954 73.8241 84.6802C89.757 72.5675 98.6499 63.1817 102 54.6067Z" stroke="#384F57" strokeWidth="3"/>
            <path d="M34.6729 74.1074C41.0475 81.3635 63.5461 81.3635 70.1082 74.1074" stroke="#384F57" strokeWidth="3" strokeLinecap="round"/>
        </svg>
    );
}