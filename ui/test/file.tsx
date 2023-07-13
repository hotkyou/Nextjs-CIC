"use client"
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';

const ImageUploader: React.FC = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		const reader = new FileReader();

		reader.onload = (e: ProgressEvent<FileReader>) => {
			setSelectedImage(e.target?.result as string);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<div>
			<div>
				<input type="file" onChange={handleImageUpload} style={{ width: '42px', height: '42px', color: '#EF4444',opacity: '0' ,position: 'absolute', borderRadius: '50%'}} />
				<Image
				src="/comm_photo.svg"
				alt="magn glassifying"
				style={{ width: '22px', height: '22px',backgroundColor: '#8AD8D4', borderRadius: '50%'}}
				width={142}
				height={42}
			/>
			</div>
			{selectedImage && (
				<div className=' border border-solid border-red-400' style={{ width: '136px', height: '136px', borderRadius: '50%', overflow: 'hidden' , position:'absolute' ,top:'0',left:'0'}}>
					<img src={selectedImage} alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
				</div>
			)}
		</div>
	);
};

export default ImageUploader;
