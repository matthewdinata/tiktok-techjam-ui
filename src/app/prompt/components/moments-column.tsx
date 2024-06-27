"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export type Card = {
	title: string;
	id: string;
};

type DropIndicatorProps = {
	beforeId: string | null;
};

function DropIndicator({ beforeId }: DropIndicatorProps) {
	return (
		<div
			data-before={beforeId || "-1"}
			className="my-0.5 h-0.5 w-full bg-pink-700 opacity-0"
		/>
	);
}

type CardProps = {
	title: string;
	id: string;
	handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: Card) => void;
	handleDelete: (id: string) => void;
};

function CardComponent({
	title,
	id,
	handleDragStart,
	handleDelete,
}: CardProps) {
	return (
		<>
			<DropIndicator beforeId={id} />
			<motion.div
				layout
				draggable="true"
				onDragStart={(e: unknown) =>
					handleDragStart(e as React.DragEvent<HTMLDivElement>, {
						title,
						id,
					})
				}
				className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 mb-2 active:cursor-grabbing flex justify-between items-center gap-2 group"
			>
				<p className="text-sm text-neutral-100">{title}</p>
				<BiTrash
					className="text-neutral-400 cursor-pointer hover:text-neutral-500 transition-all opacity-0 group-hover:opacity-100"
					onClick={(e) => {
						e.stopPropagation();
						handleDelete(id);
					}}
				/>
			</motion.div>
		</>
	);
}

type AddCardProps = {
	cards: Card[];
	setCards: React.Dispatch<React.SetStateAction<Card[]>>;
};

function AddCard({ cards, setCards }: AddCardProps) {
	const [text, setText] = useState("");
	const [adding, setAdding] = useState(true);

	const handleClose = () => {
		if (cards.length !== 0) setAdding(false);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!text.trim().length) return;

		const newCard: Card = {
			title: text.trim(),
			id: Math.random().toString(),
		};

		setCards((pv) => [...pv, newCard]);
		setText("");
		setAdding(false);
	};

	return (
		<>
			{adding ? (
				<motion.form layout onSubmit={handleSubmit}>
					<textarea
						onChange={(e) => setText(e.target.value)}
						value={text}
						placeholder="Add new moment..."
						className="w-full rounded border border-pink-600 bg-pink-400/5 p-3 text-sm text-neutral-50 placeholder-neutral-500 focus:outline-0"
					/>
					<div className="mt-1.5 flex items-center justify-end gap-1.5">
						<Button
							onClick={handleClose}
							className={`px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50 bg-neutral-700 hover:bg-neutral-800 ${cards.length === 0 ? "hidden" : ""}`}
						>
							Close
						</Button>
						<Button
							type="submit"
							className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
						>
							<span>Add</span>
							<FiPlus />
						</Button>
					</div>
				</motion.form>
			) : (
				<motion.button
					layout
					onClick={() => setAdding(true)}
					className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
				>
					<span>Add moment</span>
					<FiPlus />
				</motion.button>
			)}
		</>
	);
}

type ColumnProps = {
	cards: Card[];
	setCards: React.Dispatch<React.SetStateAction<Card[]>>;
};

export default function MomentsColumn({ cards, setCards }: ColumnProps) {
	const handleDragStart = (
		e: React.DragEvent<HTMLDivElement>,
		card: Card
	) => {
		e.dataTransfer.setData("cardId", card.id);
	};

	const handleDelete = (id: string) => {
		setCards((prevCards) => prevCards.filter((card) => card.id !== id));
	};

	const getNearestIndicator = (
		e: React.DragEvent<HTMLDivElement>,
		indicators: HTMLElement[]
	) => {
		const DISTANCE_OFFSET = 50;
		const el = indicators.reduce(
			(closest, child) => {
				const box = child.getBoundingClientRect();
				const offset = e.clientY - (box.top + DISTANCE_OFFSET);
				if (offset < 0 && offset > closest.offset) {
					return { offset, element: child };
				}
				return closest;
			},
			{
				offset: Number.NEGATIVE_INFINITY,
				element: indicators[indicators.length - 1],
			}
		);
		return el;
	};

	const getIndicators = () =>
		Array.from(document.querySelectorAll(`[data-before]`)) as HTMLElement[];

	const clearHighlights = (els?: HTMLElement[]) => {
		const indicators = els || getIndicators();
		indicators.forEach((i) => {
			// eslint-disable-next-line no-param-reassign
			i.style.opacity = "0";
		});
	};

	const highlightIndicator = (e: React.DragEvent<HTMLDivElement>) => {
		const indicators = getIndicators();
		clearHighlights(indicators);
		const el = getNearestIndicator(e, indicators);
		el.element.style.opacity = "1";
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		highlightIndicator(e);
	};

	const handleDragLeave = () => {
		clearHighlights();
	};

	const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
		clearHighlights();

		const cardId = e.dataTransfer.getData("cardId");
		const indicators = getIndicators();
		const { element } = getNearestIndicator(e, indicators);

		const before = element.dataset.before || "-1";

		if (before !== cardId) {
			let copy = [...cards];

			const cardToMove = copy.find((c) => c.id === cardId);
			if (!cardToMove) return;

			copy = copy.filter((c) => c.id !== cardId);

			const moveToBack = before === "-1";

			if (moveToBack) {
				copy.push(cardToMove);
			} else {
				const insertAtIndex = copy.findIndex((c) => c.id === before);
				if (insertAtIndex === -1) return;
				copy.splice(insertAtIndex, 0, cardToMove);
			}

			setCards(copy);
		}
	};

	return (
		<div className="w-full shrink-0 px-10 mt-10">
			<div
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDragEnd}
				className="h-full w-full transition-colors bg-neutral-800/0"
			>
				{cards.map((c) => (
					<CardComponent
						key={c.id}
						{...c}
						handleDragStart={handleDragStart}
						handleDelete={handleDelete}
					/>
				))}
				<DropIndicator beforeId={null} />
				<AddCard cards={cards} setCards={setCards} />
			</div>
		</div>
	);
}
