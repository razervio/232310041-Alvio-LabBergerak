import React from 'react';
import { FlatList, Text } from 'react-native';
import UserItem from './UserItem';

const users = [
  { id: 1, name: 'Zaki', fullname: 'Zaki Aljabbar', gender: 'M' },
  { id: 2, name: 'Hana', fullname: 'Hana Yulia Rahmah', gender: 'F' },
];

const FlatListView = () => (
  <>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>FlatList</Text>
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <UserItem {...item} />}
    />
  </>
);

export default FlatListView;
