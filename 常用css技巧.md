# 实现灰度页面
```css
body {
  filter: grayscale(100%);
} 
```

# 实现真.1px边框
```css
.thin { 
  position: relative; 
  &::after { 
    position: absolute; 
    left: 0; 
    top: 0; 
    border: 1px solid #f66; 
    width: 200%; 
    height: 200%; 
    content: ""; 
    transform: scale(.5); 
    transform-origin: left top; 
  } 
}
```

# 利用伪类实现宽高相等
```css
.circle-title {
    width: 100px;
}
.circle-title::before {
  content: "";
  padding-top: 100%;
  display: block;
} 
```