import { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    roundness?: string;
    variant?: string;
    onClick?: () => void;
};

type ButtonStylesProps = {
    roundness?: string;
    variant?: string;
    block?: boolean;
};

function getButtonStyle({ roundness = "pill", variant = "default" }: ButtonStylesProps) {
    const baseStyles = "px-4 lg:px-6 py-2 text-sm font-semibold flex items-center justify-center gap-2";
    const variantsStyles = {
        roundness: {
            medium: "rounded-md",
            large: "rounded-lg",
            pill: "rounded-full",
            square: "rounded-none",
        },
        variant: {
            primary: "bg-[#2563EB] text-white",
            secondary: "bg-black-dark text-white",
            success: "bg-green text-white",
            error: "bg-red-100 border-2 border-solid border-red-300 text-red-600",
            default: "bg-gray-100 text-black-light",
            outline: "bg-transparent text-black-dark border",
            text: "bg-gray-100 lg:bg-transparent text-black-light border-none hover:bg-gray-100 hover:text-red-dark-500 transition",
        },
    };

    const roundnessClass =
        variantsStyles.roundness[roundness as keyof typeof variantsStyles.roundness] || variantsStyles.roundness.pill;
    const variantClass =
        variantsStyles.variant[variant as keyof typeof variantsStyles.variant] || variantsStyles.variant.default;

    return `${baseStyles} ${roundnessClass} ${variantClass}`;
}

export default function Button({ children, roundness, variant, onClick }: ButtonProps) {
    return (
        <button className={getButtonStyle({ roundness, variant })} onClick={onClick} data-testid="button">
            {children}
        </button>
    );
}
