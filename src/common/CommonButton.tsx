import LoadingSpinner from "./LoadingSpinner";

interface CommonButtonProps {
    onClick?: () => void;
    isLoading?: boolean;
    disable?: boolean;
    type?: 'submit' | 'button' | 'reset';
    children?: React.ReactNode;
}

export const CommonButton: React.FC<CommonButtonProps> = ({
    onClick,
    isLoading = false,
    disable = false,
    type = 'submit',
    children = 'button'
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disable || isLoading}
            className={`
            flex justify-center items-center
            px-8 py-2 rounded-md text-xl
            bg-primary-500 text-white
            transition-all duration-200
            hover:bg-primary-600
            focus:outline-none focus:ring-1 focus:ring-primary-500 focus:ring-offset-1
            disable:opacity-50 disabled:cursor-not-allowed
            w-full sm:w-auto
            `}
            aria-busy={isLoading}
        >
            <div className="flex gap-2 items-center">
                {isLoading ? <LoadingSpinner /> : null}
                {children}
            </div>
        </button>
    );
}