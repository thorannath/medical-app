import React from "react";
import {Text,View,FlatList} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../tabs/stylesMessage';
  
  const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
  
      messageTime: '4 mins ago',
      messageText:
        'Hey, get appointment today.',
    },
    {
      id: '2',
      userName: 'John Doe',
   
      messageTime: '2 hours ago',
      messageText:
        'Hey did you check out your reports ?',
    },
    {
      id: '3',
      userName: 'Ken William',

      messageTime: '1 hours ago',
      messageText:
        'Hey.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
   
      messageTime: '1 day ago',
      messageText:
        'Hey, did you get vaccinated?.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
   
      messageTime: '2 days ago',
      messageText:
        'Hey, did you get flu shot?.',
    },
  ];

const Allmessages=({navigation})=>
{
    
    return(
        <Container>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('chat')}>
              <UserInfo>
                <TextSection>
                  <UserInfoText>
                    <UserName>{item.userName}</UserName>
                    <PostTime>{item.messageTime}</PostTime>
                  </UserInfoText>
                  <MessageText>{item.messageText}</MessageText>
                </TextSection>
              </UserInfo>
            </Card>
          )}
        />
      </Container>

        
    )
}

export default Allmessages;