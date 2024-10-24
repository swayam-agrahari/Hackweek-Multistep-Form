import React from 'react';

export default function PersonolInfo() {
    function getVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }

    const videoId = getVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs');

    return (
        <div className="fixed inset-0 z-50 bg-black">
            {videoId ? (
                <iframe
                    title='rick rolled'
                    className='w-full h-full'
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            ) : (
                <p className="text-white">Video ID not found.</p>
            )}
        </div>
    );
}
