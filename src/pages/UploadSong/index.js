import React, { useState } from 'react';
import axios from 'axios';
import * as httpRequest from '../../untils/request';

const UploadSong = () => {
    const [srcMusic, setSrcMusic] = useState(null);
    const [imageMusic, setImageMusic] = useState(null);
    const [artistName, setArtistName] = useState('');
    const [songName, setSongName] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
    const [genre, setGenre] = useState('');
    const [formDataJSON, setFormDataJSON] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Tạo đối tượng JSON từ dữ liệu form
        const jsonData = {
            // src_music: srcMusic ? srcMusic.name : null,
            // image_music: imageMusic ? imageMusic.name : null,
            name_singer: artistName,
            name_music: songName,
            link_mv: youtubeLink,
            category: genre,
        };

        // Cập nhật state với dữ liệu JSON
        setFormDataJSON(jsonData);
    };

    const style = {
        padding: '10px',
        margin: '10px',
    };

    const input = {
        color: 'black',
        padding: '10px',
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={style}>
                    <label htmlFor="artistName">Artist Name:</label>
                    <input
                        style={input}
                        type="text"
                        id="artistName"
                        value={artistName}
                        onChange={(e) => setArtistName(e.target.value)}
                    />
                </div>
                <div style={style}>
                    <label htmlFor="songName">Song Name:</label>
                    <input
                        style={input}
                        type="text"
                        id="songName"
                        value={songName}
                        onChange={(e) => setSongName(e.target.value)}
                    />
                </div>
                <div style={style}>
                    <label htmlFor="youtubeLink">YouTube Link:</label>
                    <input
                        style={input}
                        type="text"
                        id="youtubeLink"
                        value={youtubeLink}
                        onChange={(e) => setYoutubeLink(e.target.value)}
                    />
                </div>
                <div style={style}>
                    <label htmlFor="genre">Genre:</label>
                    <input
                        style={input}
                        type="text"
                        id="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <button style={input} type="submit">
                    Show JSON
                </button>
            </form>

            {formDataJSON && (
                <div>
                    <h3>Form Data as JSON:</h3>
                    <pre>{JSON.stringify(formDataJSON, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default UploadSong;
