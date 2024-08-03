import React, { useState } from 'react';
import axios from 'axios'
import * as httpRequest from '../../untils/request'

const UploadSong = () => {
  const [formData, setFormData] = useState({
    songName: '',
    artistName: '',
    youtubeLink: '',
    genre: '',
    imageFile: null,
    audioFile: null,
  });

  const style = {
    color: 'black',
    padding: '10px',
    margin: '3px'
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken)
    if (!accessToken) {
      console.error('Access token not found');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name_music', formData.songName);
    formDataToSend.append('name_singer', formData.artistName);
    formDataToSend.append('link_mv', formData.youtubeLink);
    formDataToSend.append('category', formData.genre);
    formDataToSend.append('image_music', formData.imageFile);
    formDataToSend.append('src_music', formData.audioFile);

    try {
      const response = await httpRequest.post('/music/create',
        formDataToSend, 
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
        }
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        marginBottom: "20px"
      }}>
        <label>Tên bài hát:</label>
        <input
          style={style}
          type="text"
          name="songName"
          value={formData.songName}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        marginBottom: "20px"
      }}>
        <label>Tên ca sĩ:</label>
        <input
          style={style}
          type="text"
          name="artistName"
          value={formData.artistName}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        marginBottom: "20px"
      }}>
        <label>Link YouTube:</label>
        <input
          style={style}
          type="url"
          name="youtubeLink"
          value={formData.youtubeLink}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        marginBottom: "20px"
      }}>
        <label>Thể loại nhạc:</label>
        <input
          style={style}
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        marginBottom: "20px"
      }}>
        <label>Hình ảnh:</label>
        <input
          type="file"
          name="imageFile"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        marginBottom: "20px"
      }}>
        <label>Âm thanh:</label>
        <input
          type="file"
          name="audioFile"
          accept="audio/*"
          onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit" style={style}>Submit</button>
    </form>
  );
};

export default UploadSong;
