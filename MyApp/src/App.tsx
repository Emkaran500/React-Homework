import React, { useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Add from './assets/icons/add.svg';
import Minus from './assets/icons/minus.svg';
import Heart from './assets/icons/heart.svg';
import ArrowLeft from './assets/icons/arrowleft2.svg';
import ArrowDown from './assets/icons/arrowdown2.svg';
import X from './assets/icons/x.svg';
import Color from './assets/icons/ellipse_10.svg';
import Check from './assets/icons/frame_36.svg';
import Star from './assets/icons/star_4.svg';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';



export const App = () =>
{
  const sheetRefSize = useRef<BottomSheet>(null);
  const sheetRefColor = useRef<BottomSheet>(null);
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];
  const colors = [['Orange', '#EC6D26'], ['Black', '#272727'], ['Red', '#FA3636'], ['Yellow', '#F4BD2F'], ['Blue', '#4468E5']]
  const [size, setSize] = useState(sizes[0]);
  const [color, setColor] = useState('#EC6D26');
  const [quantity, setQuantity] = useState(1);
  const defaultPrice = 148
  const [price, setPrice] = useState(defaultPrice);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [favoriteColor, setFavoriteColor] = useState('#F4F4F4')

  const increaseQuantity = () => 
  {
      setQuantity(quantity + 1);
      setPrice(defaultPrice * (quantity + 1))
  }
  const decreaseQuantity = () =>
  {
    if (quantity > 1)
    {
      setQuantity(quantity - 1);
      setPrice(defaultPrice * (quantity - 1))
    }
  };

  const handleCloseSize = () =>
  {
    sheetRefSize.current?.close();
    setIsBottomSheetOpen(false);
  }

  const handleOpenSize = () =>
  {
    if (isBottomSheetOpen == false)
    {
      setIsBottomSheetOpen(true);
    }
    else
    {
      sheetRefColor.current?.close();
    }
    sheetRefSize.current?.expand();
  }

  const handleCloseColor = () =>
  {
    sheetRefColor.current?.close();
    setIsBottomSheetOpen(false);
  }
  
  const handleOpenColor = () =>
  {
    if (isBottomSheetOpen == false)
    {
      setIsBottomSheetOpen(true);
    }
    else
    {
      sheetRefSize.current?.close();
    }
    sheetRefColor.current?.expand();
  }

  const selectSize = (size: string) => {
    setSize(size);
    handleCloseSize();
  };

  const selectColor = (color: string) => {
    setColor(color);
    handleCloseColor();
  };

  const setFavorite = () => {
    if (favoriteColor == '#F4F4F4')
      setFavoriteColor('#FA3636')
    else
      setFavoriteColor('#F4F4F4')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaView style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity style={styles.topButton}><ArrowLeft></ArrowLeft></TouchableOpacity>
            <TouchableOpacity style={styles.topButton} onPress={setFavorite}><Heart fill={favoriteColor}></Heart></TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <ScrollView contentContainerStyle={styles.imageScrollContent} style={styles.imageScroll} horizontal={true} showsHorizontalScrollIndicator={true}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/f0be/0cb1/d7e6b11c7121967f9dae4cd2af210c30?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QzlfOuRW5Y4~u7eCC9LrL4fXN1K9qAyirpy4g9SpTCSFx4CSnfpkHlyHnZpti3vJ5m4mEbdyDdwAQ~rz4u~lWABwgm~gKAwsMCF~mH9rJ3zhtksWzblPS5r0sd8LT1mJDCZ5bncNWRKf--bnJDhTRtrX5826GnbdRIV1FoZPwYFKgrI7TPH9undo0bxHOAU29JP3agOQyk15Xh4STWH8ea-fgikjIgu1Sntm4enokpGkjR9BRMWzFseGXK-C~ZRCEI5Zq5T~mTzLQbGqFpDQSkJMb61N0YJZok~khERdnvsIv7TwqWAGI8MU2QfFMpJ0Q2UHfspZ0vOdmO7u4TbVsw__' }}
                style={styles.productImage}
              />
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/8dbe/29ef/7cc2cda6d7d7db4c7eee982642d6f9a7?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQJwcYGoC6Ne-kwNgIylqQDIePwBYuggBynKGUILjiOOZXQ-PmzE9aEfT1qN0C3ht0shtuHjGVm-PWOFIUlZLNw3G1csdl8o5A4ioX~AbvzkJoa7JGiZlZPcQcbZwSAo6LIJWO2EoX2J4nPMpIvCushQbVa-v9Fy3YPFPovhKvG1kLGSL2xQfAkrdkbqEz9at5vR2t016YjpbIBqQTI-GFDQ3vcX2tGSaxp2zdi4Nt7Ch2YwSt461c3CWsaiKJ84tvFFpxhRSU3MlcXjXKSkccZgboAp8qbm6FJR0M9~8uO~pucG9JerpklC4-z-eokIvySRPIl~S9P3NGjjU46jCg__' }}
                style={styles.productImage}
              />
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/44ba/888c/fb4ba715388632c08bcead8fe7d7cbb8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IiwRKQmP68W8uB73wuESTve-QTQV7PCdGQv9OqNP32EzVBow-XXPto6nknRfTSh6Dogs93JEYlnBNxdAj18CpibSfmmikA9Xk~WOiNdlVeG5WJnPdFdToeLMu694oF~k7MXqdTogsLFQocje6LhGiALpx5peg3PAxx-fALsWYLw2AyZ-fhh1sMFesZRABWy2qHZms5P1YD-yVLatqyMASVioIfWtoZWrOhywRFJqgIOiYhoaP0kxhkGqn1U~4kEzZViwhZjjDHM91Fda89bxxlj2ca0v22trP-pNyAakHjSizAeStAPruU0hQ3Ur8pSmHp7RE~MwEfSRFO7C--X1yw__' }}
                style={styles.productImage}
              />
            </ScrollView>
          </View>
        
          <Text style={styles.productTitle}>Men's Harrington Jacket</Text>
          <Text style={styles.productPrice}>${defaultPrice}</Text>

          <TouchableOpacity style={styles.choiceContainer} onPress={handleOpenSize}>
            <Text style={styles.choiceText}>Size</Text>
            <View style={styles.choiceComponentColor}>
            <Text style={styles.choiceValue}>{size}</Text>
            <ArrowDown></ArrowDown>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.choiceContainer}  onPress={handleOpenColor}>
            <Text style={styles.choiceText}>Color</Text>
            <View style={styles.choiceComponentColor}>
              <Color fill={color}></Color>
              <ArrowDown></ArrowDown>
            </View>
          </TouchableOpacity>

          <View style={[styles.choiceContainer, {paddingVertical: 10}, {marginBottom: 0}]}>
            <Text style={styles.choiceText}>Quantity</Text>
            <View style={styles.quantityButtonContainer}>
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Add></Add>
              </TouchableOpacity>
              <Text style={styles.choiceText}>{quantity}</Text>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Minus></Minus>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.additionalInfo}>
            <Text style={styles.additionalInfoDescription}>Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, while the soft corduroy keeps it casual and timeless.</Text>
            <View style={styles.additionalInfoShipping}>
              <Text style={styles.additionalInfoShippingTitle}>Shipping & Returns</Text>
              <Text style={styles.additionalInfoShippingText}>Free standard shipping and free 60-day returns</Text>
            </View>
          </View>

          <View style={styles.reviewsCard}>
            <View style={styles.reviewsTitleCard}>
              <Text style={styles.reviewsTitle}>Reviews</Text>
              <Text style={styles.reviewsRating}>4.5 Ratings</Text>
              <Text style={styles.reviewsViews}>213 Reviews</Text>
            </View>

            <View style={styles.reviews}>
              <View style={styles.review}>
                <View style={styles.reviewTop}>
                  <View style={styles.reviewPersonal}>
                    <Image style={styles.reviewAvatar} source={{ uri: 'https://s3-alpha-sig.figma.com/img/8fe7/ad6b/85c053224d98bfd7e680608c07f3c239?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-Dk42J~zu3RwupP48dUGoQhCCW~-AGUaaosarMXzS0xECwKgCCUkrjSwJYxU9p5JviJ50n4dpyxB8wtvLDw0P~lvt2glrx0d9bcqo7w9LX1r8dfm46VZfE0dpj4DNy23zvsbgM~fAQFiC3ekubI2HaWzCCbQZe-wXhQNvNL1QcbitTOc-vctRydKlyfuLpNCyjzo58a-bO6pbgPiCzwtShyIGqRhkjHsCiHxOpS1z6gk5kz56JBuRP70PZ0YCDe4PyIlqthtXt13MMfPRSURBWNc1ifSMJ5YjlXUWeIM4lCP4EoDsdSpW8PlTTNZADFJpVWXpR5wlwVk606D7cbHA__' }}/>
                    <Text style={styles.reviewName}>Alex Morgan</Text>
                  </View>
                  <View style={styles.reviewStars}>
                    <Star fill={'#8E6CEF'}></Star>
                    <Star fill={'#8E6CEF'}></Star>
                    <Star fill={'#8E6CEF'}></Star>
                    <Star fill={'#F4F4F4'}></Star>
                    <Star fill={'#F4F4F4'}></Star>
                  </View>
                </View>
                <Text style={styles.reviewDescription}>Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories.</Text>
                <Text style={styles.reviewDate}>12days ago</Text>
              </View>

              <View style={styles.review}>
                <View style={styles.reviewTop}>
                  <View style={styles.reviewPersonal}>
                    <Image style={styles.reviewAvatar} source={{ uri: 'https://s3-alpha-sig.figma.com/img/2cf2/8529/c55d9beef148505189ec77359141ede7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wyy5Cfx4oPj3mmyznftnP5IZcqZEMZNToF2BMk6I9eH2THSBh1jPstqDkdLSmlilXuE3Ur92ckMscFs9F3m4mj4JhKIPx9ADo0d8o8zKw0qIy2vr82GTXtEu9jVL62UX9TNJxSpAi~MpiX8~EQTvp-Wuma8aRnU5exOMU7O-Q5CQgwLrbWpzQefDf7QcRaxrbvFXbYvRtNBwBNNhNDYXK9n9NPwXcr47oP1IrC4Lw1h9fivcdd3BiOQLw5wY2h1UCPWkBp1irec9GPeH9dofwo4XxBc2GeT65kl86ZF5ZypUZA1i9rFPvtMcKtjXwbOik7cjin-comZci5ARuYsyUA__' }}/>
                    <Text style={styles.reviewName}>Alex Morgan</Text>
                  </View>
                  <View style={styles.reviewStars}>
                    <Star fill={'#8E6CEF'}></Star>
                    <Star fill={'#8E6CEF'}></Star>
                    <Star fill={'#8E6CEF'}></Star>
                    <Star fill={'#F4F4F4'}></Star>
                    <Star fill={'#F4F4F4'}></Star>
                  </View>
                </View>
                <Text style={styles.reviewDescription}>Gucci transcribes its heritage, creativity, and innovation into a plenitude of collections. From staple items to distinctive accessories.</Text>
                <Text style={styles.reviewDate}>12days ago</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.addToBagButton}>
            <Text style={{...styles.productPrice, color: '#FFFFFF', marginBottom: 0}}>${price}</Text>
            <Text style={styles.addToBagText}>Add to Bag</Text>
          </TouchableOpacity>

          <BottomSheet
          ref={sheetRefSize}
          index={-1}
          style={styles.bottomSheet}
          handleComponent={() => 
          <View style={styles.bottomSheetTitle}>
            <Text style={styles.bottomSheetText}>Size</Text>
            <TouchableOpacity onPress={handleCloseSize}>
              <X></X>
            </TouchableOpacity>
          </View>}
          >
          <BottomSheetView style={styles.bottomSheetView}>
            {sizes.map((storageSize) => (
              <TouchableOpacity
                key={storageSize}
                style={[styles.bottomSheetTouchable, size == storageSize ? {backgroundColor: '#8E6CEF'} : null]}
                onPress={() => selectSize(storageSize)}
              >
                <Text style={[styles.bottomSheetTouchableText, size == storageSize ? {color: '#FFFFFF'} : null]}>{storageSize}</Text>
                {size == storageSize && <Check></Check>}
              </TouchableOpacity>
            ))}
          </BottomSheetView>
        </BottomSheet>

        <BottomSheet
          ref={sheetRefColor}
          index={-1}
          style={styles.bottomSheet}
          handleComponent={() => 
          <View style={styles.bottomSheetTitle}>
            <Text style={styles.bottomSheetText}>Color</Text>
            <TouchableOpacity onPress={handleCloseColor}>
              <X></X>
            </TouchableOpacity>
          </View>}
          >
          <BottomSheetView style={styles.bottomSheetView}>
            {colors.map(([storageColorName, storageColor]) => (
              <TouchableOpacity
                key={storageColor}
                style={[styles.bottomSheetTouchable, color == storageColor ? {backgroundColor: '#8E6CEF'} : null]}
                onPress={() => selectColor(storageColor)}
              >
                <Text style={[styles.bottomSheetTouchableText, color == storageColor ? {color: '#FFFFFF'} : null]}>{storageColorName}</Text>
                <View style={[styles.bottomSheetComponent, color != storageColor ? {paddingRight: 50} : null]}>
                  <View style={[styles.bottomSheetColor, color == storageColor ? {padding: 3} : null]}>
                    <Color fill={storageColor}></Color>
                  </View>
                  {color == storageColor && <Check></Check>}
                </View>
              </TouchableOpacity>
            ))}
          </BottomSheetView>
        </BottomSheet>
        </SafeAreaView>
      </GestureHandlerRootView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  top: {
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topButton: {
    backgroundColor: '#F4F4F4',
    padding: 12,
    borderRadius: 100
  },
  topIcon: {
    fontSize: 16
  },
  imageContainer: {
    flexDirection: 'row'
  },
  imageScroll: {
    flex: 1
  },
  imageScrollContent: {
    flexGrow: 1,
    gap: 10
  },
  productImage: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').width * 0.4 * 1.5,
    resizeMode: 'contain',
  },
  productTitle: {
    fontFamily: 'Gabarito-Bold',
    color: '#272727',
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 15,
  },
  productPrice: {
    fontFamily: 'Gabarito-Bold',
    fontSize: 16,
    fontWeight: 700,
    color: '#8E6CEF',
    marginBottom: 20,
  },
  selector: {
    marginBottom: 20,
  },
  choiceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 20
  },
  choiceText: {
    fontFamily: 'Circular-Std-Medium',
    color: '#272727',
    fontSize: 16,
    fontWeight: 500
  },
  choiceComponentColor: {
    gap: 25,
    flexDirection: 'row',
    alignItems: 'center'
  },
  choiceValue: {
    fontFamily: 'Gabarito-Bold',
    color: '#272727',
    fontSize: 16,
    fontWeight: 700
  },
  choiceIcon: {
    fontSize: 16,
    color: '#FFFFFF'
  },
  additionalInfo: {
    flex: 1
  },
  additionalInfoDescription: {
    fontFamily: 'Circular-Std-Medium',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 19.2,
    color: '#27272780',
    marginTop: 26,
    marginBottom: 24
  },
  additionalInfoShipping: {
    justifyContent: 'space-between',
    gap: 12
  },
  additionalInfoShippingTitle: {
    fontFamily: 'Gabarito-Bold',
    color: '#272727',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 19.2
  },
  additionalInfoShippingText: {
    fontFamily: 'Circular-Std-Medium',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 19.2,
    color: '#27272780'
  },
  reviewsCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 16,
    marginTop: 24,
  },
  reviewsTitleCard: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12
  },
  reviewsTitle: {
    fontFamily: 'Gabarito-Bold',
    color: '#272727',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 19.2,
  },
  reviewsRating: {
    fontFamily: 'Gabarito-Bold',
    color: '#272727',
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 28.8,
  },
  reviewsViews: {
    fontFamily: 'Circular-Std-Medium',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 19.2,
    color: '#27272780'
  },
  reviews: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 89
  },
  review: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4
  },
  reviewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reviewPersonal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12
  },
  reviewAvatar: {
    width: Dimensions.get('window').width * 0.1,
    height: Dimensions.get('window').width * 0.1,
    borderRadius: 20
  },
  reviewName: {
    fontFamily: 'Gabarito-Bold',
    color: '#272727',
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 14.4
  },
  reviewStars: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  reviewDescription: {
    fontFamily: 'Circular-Std-Medium',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 19.2,
    color: '#27272780'
  },
  reviewDate: {
    fontFamily: 'Circular-Std-Medium',
    color: '#272727',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 19.2
  },
  quantityButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 23
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#8E6CEF',
    borderRadius: 100,
    marginHorizontal: 5
  },
  addToBagButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#8E6CEF',
    paddingVertical: 16.5,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderRadius: 100,
  },
  addToBagText: {
    fontFamily: 'Circular-Std-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 400,
  },
  bottomSheet: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  bottomSheetTitle: {
    paddingVertical: 14,
    paddingHorizontal: 34,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: Dimensions.get('window').width * 0.3
  },
  bottomSheetText: {
    fontSize: 24,
    fontWeight: 700
  },
  bottomSheetComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 23
  },
  bottomSheetColor: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25
  },
  bottomSheetTouchable: {
    borderRadius: 100,
    paddingHorizontal: 22,
    paddingVertical: 18,
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomSheetTouchableText: {
    fontSize: 16,
    fontWeight: 500
  },
  bottomSheetView: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    gap: 16
  }
});