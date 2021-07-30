import React from 'react'
import {GlobalReach} from '../Components'
import {Container} from '@material-ui/core'

export default function GlobalReachContainer (){
    return (
        <GlobalReach>
            <Container fixed>
                <GlobalReach.GroupTitle>
                    <GlobalReach.Title>Phạm vi toàn cầu</GlobalReach.Title>
                    <GlobalReach.WrapSubTitle>
                        <GlobalReach.SubTitle>Udemy là thị trường hàng đầu trên toàn cầu về giảng dạy và học tập, kết nối hàng triệu sinh viên với những kỹ năng họ cần để thành công. Udemy kể từ tháng 12 năm 2020:</GlobalReach.SubTitle>
                    </GlobalReach.WrapSubTitle>
                </GlobalReach.GroupTitle>
                <GlobalReach.GroupContent>
                    <GlobalReach.Wrap>40M <span>Học viên</span></GlobalReach.Wrap>
                    <GlobalReach.Wrap>56K <span>Giảng viên</span></GlobalReach.Wrap>
                    <GlobalReach.Wrap>155K <span>Khóa học</span></GlobalReach.Wrap>
                    <GlobalReach.Wrap>480M <span>Đăng ký</span></GlobalReach.Wrap>
                    <GlobalReach.Wrap>155M <span>Số phút video</span></GlobalReach.Wrap>
                    <GlobalReach.Wrap>65+ <span>Ngôn ngữ</span></GlobalReach.Wrap>
                    <GlobalReach.Wrap>7,000+ <span>Khách hàng</span></GlobalReach.Wrap>
                </GlobalReach.GroupContent>
            </Container>
        </GlobalReach>
    )
}