import images from '../assets';
import Button from '../components/Button';
import {
    Ads,
    Block,
    Dieukhoan,
    Discover,
    Heart,
    IconsVIP,
    Info,
    LogOut,
    More,
    NewSong,
    Phone,
    Private,
    Quality,
    Radio,
    Star,
    ThemeMusic,
    Upload,
    Game
} from '../components/Icons';

// MENU action and button
export const MENU_ACTIONS_RIGHT = [
    {
        icon: Heart,
        title: 'Thêm vào thư viện',
        type: 'like',
    },
    {
        icon: More,
        title: 'Thêm',
        type: 'more',
    },
];
export const MENU_USER_HEADER = [
    {
        title: 'Nâng cấp VIP',
        icon: IconsVIP,
    },
    {
        title: 'Mua code VIP',
        icon: IconsVIP,
    },
    {
        title: 'Tải lên',
        icon: Upload,
    },
    {
        title: 'Đăng Xuất',
        icon: LogOut,
        type: 'logout',
        spederate: true,
    },
];
export const MENU_SETTING_HEADER = [
    {
        title: 'Danh sách chặn',
        icon: Block,
    },
    {
        title: 'Chất lượng nhạc',
        icon: Quality,
        /*         children: {
            data: [
                {
                    title: 'SQ•128',
                    content: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn',
                },
                {
                    title: 'HQ•320',
                    content: 'Kết hợp tốt trong việc sử dụng dữ liệu và âm thanh',
                },
            ],
        }, */
    },
    {
        title: 'Giao diện',
        icon: ThemeMusic,
        /*   children: {
            data: [
                {
                    title: 'Luôn phát toàn màn hình',
                },
                {
                    title: 'Hiệu ứng',
                },
            ],
        }, */
    },
    {
        title: 'Giới thiệu',
        icon: Info,
        textblur: true,
        spederate: true,
    },
    {
        title: 'Liên hệ',
        icon: Phone,
        textblur: true,
    },
    {
        title: 'Quảng cáo',
        icon: Ads,
        textblur: true,
    },
    {
        title: 'Thỏa thuận sử dụng',
        icon: Dieukhoan,
        textblur: true,
    },
];

// handle Action render
export const renderFeatureRight = (onHandle) => {
    const result = MENU_ACTIONS_RIGHT.map((item, index) => {
        return (
            <Button
                Icons={item.icon}
                key={index}
                extraTitle={item.title}
                circle_hide
                sizes="medium"
                onHandle={() => onHandle(item)}
            />
        );
    });
    return result;
};
export const SIDEBAR_MENU = [
    {
        title: 'Cá nhân',
        icon: Private,
        to: '/my-player',
    },
    {
        title: 'Khám Phá',
        icon: Discover,
        to: '/',
    },
    /* {
        title: '#zingchart',
        icon: Chart,
        to: '/zing-chart',
    }, */
    {
        title: 'Radio',
        icon: Radio,
        to: '/radio',
    },
    /*  {
        title: 'Theo Dõi',
        icon: Following,
        to: '/following',
    }, */
    {
        title: 'Nhạc Mới',
        icon: NewSong,
        spederate: true,
        to: '/new-songs',
    },
    /*  {
        title: 'Thể Loại',
        icon: Category,
        to: '/category',
    }, */
    {
        title: 'Top 100',
        icon: Star,
        to: '/top-100-song',
    },
    {
        title: 'Game',
        icon: Game,
        to: '/lobby',
    },
    /*  {
        title: 'MV',
        icon: Mv,
        to: '/the-loai-video',
    }, */
];
export const BANNER_SLIDERS = [
    {
        banner: images.bannerSlider[0],
        to: 'new-songs',
    },
    {
        banner: images.bannerSlider[1],
        to: '/  ',
    },
    {
        banner: images.bannerSlider[2],
        to: '/top-trending?_filter=kpop',
    },
    {
        banner: images.bannerSlider[3],
        to: '/',
    },
];

// select national trending
export const KPOP_NATIONAL = 'kpop';
export const VPOP_NATIONAL = 'vpop';
export const USUK_NATIONAL = 'usuk';
export const ALL_NATIONAL = 'all';
export const LOBAl = 'lobal';
export const BUTTON_RENDER_SELECT_NATIONAL = [
    {
        title: 'TẤT CẢ',

        type: ALL_NATIONAL,
    },
    {
        title: 'VIỆT NAM',

        type: VPOP_NATIONAL,
    },
    {
        title: 'HÀN QUỐC',

        type: KPOP_NATIONAL,
    },
    {
        title: 'ÂU MỸ',

        type: USUK_NATIONAL,
    },
    {
        title: 'QUỐC TẾ',
        type: LOBAl,
    },
];
// Banner Singer Popular
export const BANNER_SINGER_POPULAR = [
    {
        src: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732642481/statics-assets/banner-son-tung_g30bup.jpg',
        name_singer: 'Sơn Tùng MTP',
        slug_banner_singer_popular: 'son-tung-mtp',
        title: 'Những Bài Hát Hay Nhất Của Sơn Tùng MTP',
    },
    {
        src: require('../assets/images/BannerSinger/banner-ho-quang-hieu.jpg'),
        name_singer: 'Hồ Quang Hiếu',
        slug_banner_singer_popular: 'ho-quang-hieu',
        title: 'Những Bài Hát Hay Nhất Của Hồ Quang Hiếu',
    },
    {
        src: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732642396/statics-assets/banner-karik_hbyyej.jpg',
        name_singer: 'Karik',
        slug_banner_singer_popular: 'karik',
        title: 'Những Bài Hát Hay Nhất Của Karik',
    },
    {
        src: require('../assets/images/BannerSinger/banner-phan-manh-quynh.jpg'),
        name_singer: 'Phan Mạnh Quỳnh',
        slug_banner_singer_popular: 'phan-manh-quynh',
        title: 'Những Bài Hát Hay Nhất Của Phan Mạnh Quỳnh',
    },
    {
        src: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732642395/statics-assets/banner-blackpink_evfhy8.jpg',
        name_singer: 'BLACKPINK',
        slug_banner_singer_popular: 'blackpink',
        title: 'Những Bài Hát Hay Nhất Của BLACKPINK',
    },
];

export const BANNER_ALBUM_HOT = [
    {
        src: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732642766/statics-assets/nhac-buon_ofwhhg.jpg',
        slug_banner_album_hot: 'nhac-buon',
        title: 'Nhạc cho người thất tình',
        name_data: [
            {
                name_singer: 'Tổng hợp',
                slug_name_singer: 'nhac-buon',
            },
            // {
            //     name_singer: 'DXRK ダーク',
            //     slug_name_singer: 'dxrk-ダーク',
            // },
        ],
    },
    // {
    //     src: require('../assets/images/BannerAlbumHot/banner-album-hot-nhac-han.jpg'),
    //     slug_banner_album_hot: 'nhac-han',
    //     title: 'Những Bài Hát Hay Nhất HÀN "XẺNG"',
    //     name_data: [
    //         {
    //             slug_name_singer: 'bts',
    //             name_singer: 'BTS',
    //         },
    //         {
    //             slug_name_singer: 'blackpink',
    //             name_singer: 'BlackPink',
    //         },
    //         {
    //             slug_name_singer: 'treasure',
    //             name_singer: 'TREASURE',
    //         },
    //     ],
    // },
    {
        src: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732642765/statics-assets/banner-album-hot-nhac-pop-au-my_pxoyfr.jpg',
        slug_banner_album_hot: 'pop-au-my',
        title: 'Đỉnh Cao Nhạc Pop, Nghe Như Không Nghe !!!',
        name_data: [
            {
                slug_name_singer: 'sasha-alex-sloan',
                name_singer: 'Sasha Alex',
            },
            {
                slug_name_singer: 'the-kid-laroi-justin-bieber',
                name_singer: 'Justin Bieber',
            },
        ],
    },
    {
        src: require('../assets/images/BannerAlbumHot/banner-album-hot-nhac-tre.jpg'),
        slug_banner_album_hot: 'nhac-tre',
        title: 'Nhạc Trẻ Gây Nghiện',
        name_data: [
            {
                slug_name_singer: 'nal',
                name_singer: 'Nal',
            },
            {
                slug_name_singer: 'khai-dang',
                name_singer: 'Khải Đăng',
            },
        ],
    },
    // {
    //     src: require('../assets/images/BannerAlbumHot/banner-album-hot-rap-viet.jpg'),
    //     slug_banner_album_hot: 'rap',
    //     title: 'Cháy Hết Mình Với Những Bản Rap Hay Nhất Mọi Thời Đại',
    //     name_data: [
    //         {
    //             slug_name_singer: 'kidz',
    //             name_singer: 'KIDZ',
    //         },
    //         {
    //             slug_name_singer: 'b-ray-x-masew-ft-amee',
    //             name_singer: 'Bray',
    //         },
    //     ],
    // },
];

// List Theme
export const MENU_THEME_LIST = {
    artist: [
        // {
        //     title: 'Ganyu',
        //     cardArtist: require('../assets/images/LisTheme/card_artist/card_theme_ganyu.jpg'),
        //     properties: {
        //         backgroundImg: require('../assets/images/LisTheme/img-background_ganyu.jpg'),
        //         colorPrimary: '#1A3570',
        //         textHover: '#4C7CFF',
        //         layoutBg: 'tranparent',
        //         layoutHeaderBg: 'rgba(179, 216, 219, 0.8)',
        //         playerBg: '#A3D5DC',
        //         primaryBg: '#D1EDF0',
        //         textPrimary: '#32323d',
        //         textSecondary: '#333333b0',
        //         purplePrimary: '#1966B2',
        //         newSongLayout: 'tranparent',
        //         borderPlayer: 'rgba(0,0,0,0.15)',
        //         backgrondSize: 'cover',
        //         sidebarPoup: '#cce0e0',
        //     },
        // },
        {
            title: 'Mặc định',
            cardArtist:
                'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg',
            properties: {
                colorPrimary: '#170f23',
                textHover: '#c273ed',
                layoutBg: '#170f23',
                sidebarBg: '#231b2e',
                layoutHeaderBg: 'rgba(23, 15, 35, 0.666)',
                playerBg: '#130c1c',
                primaryBg: '#34224f',
                textPrimary: '#fff',
                textSecondary: 'hsla(0, 0%, 100%, 0.5)',
                purplePrimary: '#9b4de0',
                newSongLayout:
                    'url(https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.9/static/media/new-release-bg.73d8f976.jpg)',
                borderPlayer: 'hsla(0,0%,100%,0.1)',
                sidebarPoup: '#2a213a',
            },
        },
        {
            title: 'Theme 1',
            cardArtist: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732640815/statics-assets/card1-jpg_umyvrc.jpg',
            properties: {
                backgroundImg: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732639072/statics-assets/theme1_z87st0.jpg',
                colorPrimary: '#D08011',
                textHover: '#F59D22',
                playerBg: '#4C473E',
                layoutHeaderBg: '#767269cc',
                layoutBg: 'tranparentent',
                primaryBg: '#605C52',
                textPrimary: '#FFFF',
                textSecondary: 'hsla(0,0%,100%,0.5)',
                purplePrimary: '#D08011',
                newSongLayout: 'tranparent',
                borderPlayer: 'rgba(0,0,0,0.05)',
                sidebarPoup: '#604a45',
            },
        },
        {
            title: 'Theme 2',
            cardArtist: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732640955/statics-assets/card2_r3pdws.jpg',
            properties: {
                backgroundImg: "https://res.cloudinary.com/nhut-lin/image/upload/v1732639474/statics-assets/theme2_mkxxxp.jpg",
                colorPrimary: '#061d4f',
                textHover: '#061d4f',
                layoutBg: 'tranparent',
                layoutHeaderBg: '#061d4f',
                playerBg: '#061d4f',
                primaryBg: '#061d4f',
                textPrimary: '#FFFF',
                textSecondary: '#b7b7b7',
                purplePrimary: '#8D22C3',
                newSongLayout: 'tranparent',
                borderPlayer: 'rgba(0,0,0,0.15)',
                sidebarPoup: '#f2f2f2',
            },
        },
        {
            title: 'Theme 3',
            cardArtist: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732641056/statics-assets/card3_k2uhp5.jpg',
            properties: {
                backgroundImg: 'https://res.cloudinary.com/nhut-lin/image/upload/v1732640384/statics-assets/theme3_qqugqs.jpg',
                colorPrimary: '#604d5d',
                textHover: '#604d5d',
                layoutBg: 'tranparent',
                layoutHeaderBg: '#061c4fcc',
                playerBg: '#604d5d',
                primaryBg: '#604d5d',
                textPrimary: '#fff',
                textSecondary: 'hsla(0,0%,100%,0.5)',
                purplePrimary: '#3560F5',
                newSongLayout: 'tranparent',
                borderPlayer: 'hsla(0,0%,100%,0.1)',
                sidebarPoup: '#1d2a49',
            },
        },
        
    ],
};
