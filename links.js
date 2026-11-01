/*
 * ND Labs
 * ============================================
 * FILE QUẢN LÝ CÁC LIÊN KẾT
 *
 * Mỗi phần tử có thể gồm:
 *
 * title         : Tên ô
 * description   : Nội dung mô tả
 * url           : Link khi bấm vào
 * image         : URL ảnh (không bắt buộc)
 * icon          : Chữ/icon nếu không dùng ảnh
 * color         : Màu nền của ô
 * textColor     : Màu tiêu đề
 * mutedColor    : Màu mô tả
 * iconColor     : Màu nền của icon
 * iconTextColor : Màu chữ bên trong icon
 * newTab        : true  = mở tab mới
 *                 false = mở trong tab hiện tại
 *
 * Có thể thêm bao nhiêu link tùy ý.
 */

const lcLinks = [
    {
        title: "LC Edu - Thí nghiệm dao động điều hòa Vật Lý 11",
        description: "Phòng thí nghiệm ảo bài học dao động điều hòa và năng lượng môn Vật Lý lớp 11 - EduND",
        url: "/ndlabs/edu/vatly/11/thi-nghiem-dao-dong-dieu-hoa/v1",
        image: "https://lceduvn.github.io/LCEdu_Logo.svg",
        
        color: "#EEF7ED",
        textColor: "#0075F1",
        mutedColor: "#668096",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",
        
        newTab: true
    },
    
    {
        title: "LC Edu - Thư viện thuộc tính thương hiệu | Thiết kế bởi ND Labs",
        description: "Thư viện thuộc tính thương hiệu của LC Edu phát triển bởi Châu Nhật Đăng và Lương Trung Nguyên - Thiết kế bởi ND Labs",
        url: "/thu-vien-thuoc-tinh-thuong-hieu/v1",
        image: "https://lceduvn.github.io/LCEdu_Logo.svg",

        color: "#EAF5FF",
        textColor: "#0068D9",
        mutedColor: "#58758E",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",

        newTab: true
    },
    
    {
        title: "LC Edu - Kế hoạch phát triển | Thiết kế bởi ND Labs",
        description: "Kế hoạch phát triển của LC Edu phát triển bởi Châu Nhật Đăng và Lương Trung Nguyên - Thiết kế bởi ND Labs",
        url: "ke-hoach-phat-trien-lcedu/v1",
        image: "https://lceduvn.github.io/LCEdu_Logo.svg",

        color: "#EAF5FF",
        textColor: "#0068D9",
        mutedColor: "#58758E",
        iconColor: "#0075F1",
        iconTextColor: "#FFFFFF",

        newTab: true
    },
];
