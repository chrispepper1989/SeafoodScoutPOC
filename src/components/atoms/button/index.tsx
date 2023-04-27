import type { LinkProps } from 'next/link';

import Link from 'next/link';
import styles from './index.module.css';

// Use Button for semantic button or LinkButton for anchor

export enum ButtonVariant {
	Primary = 'primary',
	Secondary = 'secondary',
}

type TButtonShared = React.PropsWithChildren<{
	variant?: ButtonVariant;
	disabled?: boolean;
}>;

export type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> &
	TButtonShared;
export type TLinkButton = LinkProps & TButtonShared;

export const Button: React.FC<TButton> = ({
	variant = ButtonVariant.Primary,
	children,
	type = 'button',
	disabled,
	...buttonAttributes
}) => {
	return (
		<button
			className={`${styles.btn} ${styles[variant] || ''}`}
			type={type}
			disabled={disabled}
			{...buttonAttributes}
		>
			{children}
		</button>
	);
};

export const LinkButton: React.FC<TLinkButton> = ({
	variant = ButtonVariant.Primary,
	children,
	...linkAttributes
}) => {
	return (
		<Link
			{...linkAttributes}
			className={`${styles.btn} ${styles[variant]}`}
		>
			{children}
		</Link>
	);
};
