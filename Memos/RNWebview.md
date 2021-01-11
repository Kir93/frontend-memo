# ReactNativeWebview Guide

## 1. Webview 기본 셋팅

```
import React, {useEffect, useRef, useState} from 'react';
import {WebView} from 'react-native-webview';

import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

  const ROOT_URL = 'http://localhost:3000'; // local

const App = () => {
  const ROOT_URL = 'http://localhost:3000'
  const webViewRef = useRef();

    return (
    <>
        <StatusBar barStyle="default" />
        <SafeAreaView style={{flex: 1}}>
            <WebView
            source={{uri}}
            ref={webViewRef}
            userAgent="manta"
            javaScriptEnabled={true}
            />
        </SafeAreaView>
    </>
    )
}
```

## 1.1 Webview에서의 중요한 부분 정리

- userAgent를 꼭 설정하자 : 설정을 안 할 시 Google로그인 등을 붙일 때 에러가 발생할 수 있다.
- Webview를 사용한 SNS로그인의 경우 리다이렉트로 구성한다.(새 윈도우를 열 경우 닫아주지 못 함)
- onMessage를 잘 이용하는 것이 RNW의 꽃(웹 <-> RN 통신)
