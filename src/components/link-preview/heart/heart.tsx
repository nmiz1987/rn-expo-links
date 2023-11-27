import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import { heartProps } from './interfaces';
import Box from '@/src/controllers/box/box';
import linksStore from '@/store/links/links-store';
import { GlobalColors } from '@/styles/global-colors';

function Heart({ id }: heartProps) {
  const isFavoriteByUser = linksStore.isFavoriteByUser(id);

  return (
    <Box
      onPress={() => {
        linksStore.setFavoriteByUser(id);
      }}
    >
      {isFavoriteByUser ? (
        <Ionicons name="star" color={GlobalColors.IconsColors.gold} size={24} />
      ) : (
        <Ionicons name="star-outline" color={GlobalColors.IconsColors.gold} size={24} />
      )}
    </Box>
  );
}

export default observer(Heart);
