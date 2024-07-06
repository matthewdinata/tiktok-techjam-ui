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
			className="my-0.5 h-0.5 w-full bg-rose-600 opacity-0"
		/>
	);
}

type CardProps = {
	title: string;
	id: string;
	handleDelete: (id: string) => void;
};

function CardComponent({ title, id, handleDelete }: CardProps) {
	return (
		<>
			<DropIndicator beforeId={id} />
			<motion.div
				layout
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
	const allowAdd = cards.length < 4;

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

	if (!allowAdd)
		return (
			<p className="text-center text-rose-500 text-sm">
				You have reach the moment limit.
			</p>
		);

	return (
		<>
			{adding ? (
				<motion.form layout onSubmit={handleSubmit}>
					<textarea
						onChange={(e) => setText(e.target.value)}
						value={text}
						placeholder="Add new moment..."
						className="w-full rounded border border-rose-600 bg-rose-400/5 p-3 text-base text-neutral-50 placeholder-neutral-500 focus:outline-0"
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
	const handleDelete = (id: string) => {
		setCards((prevCards) => prevCards.filter((card) => card.id !== id));
	};

	return (
		<div className="w-full shrink-0 px-10 mt-10">
			<div className="h-full w-full transition-colors bg-neutral-800/0">
				{cards.map((c) => (
					<CardComponent
						key={c.id}
						{...c}
						handleDelete={handleDelete}
					/>
				))}
				<DropIndicator beforeId={null} />
				<AddCard cards={cards} setCards={setCards} />
			</div>
		</div>
	);
}
