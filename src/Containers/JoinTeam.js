import React from 'react'
import {JoinTeam} from '../Components'
import {Container} from '@material-ui/core'

export default function JoinTeamContainer (){
    return (
        <JoinTeam>
            <Container fixed>
                <JoinTeam.Wrap>
                    <JoinTeam.GroupContent>
                        <JoinTeam.Content>
                            <JoinTeam.Title>Lợi thế của mô hình đào tạo E-learning</JoinTeam.Title>
                            <JoinTeam.Description>E-learning không chỉ là một lĩnh vực đầu tư tiềm năng mà còn là một sản phẩm nhân văn, mang lại cơ hội tiếp cận tri thức tinh hoa cho tất cả mọi người.
    Nếu bạn có đam mê với giáo dục, hãy cùng Unica tạo nên những đột phá mới để thay đổi thực tại và kiến tạo tương lai!</JoinTeam.Description>
                            <JoinTeam.Button href = "/">Join Team</JoinTeam.Button>
                        </JoinTeam.Content>
                    </JoinTeam.GroupContent>
                    <JoinTeam.GroupImage src = "../images/About/img3.jpg"></JoinTeam.GroupImage>
                </JoinTeam.Wrap>
            </Container>
        </JoinTeam>
    )
}