## CSS选择符
1. 类型选择符
类型选择符用于选择特定类的元素，比如段落或标题元素
      ```css
      p {
        color: black;
      }
      ```
2. 后代选择符
  后代选择符用于选择某个或某组元素的后代
    ```css 
    blockquote p {
      padding-left: 2rem;
    } 
    ```
3. ID选择符和类选择符
   这两个选择符通过对应的ID和class属性的值来选择元素。ID选择符由`#`开头，类选择符由`.`开头
4. 子选择符
   与后代选择符会选择一个元素的所有后代不同，子选择符只选择一个元素的直接后代，也就是子元素
   ```css
   #nav > li {
     background: url(folder.png) no-repeat left top;
     padding-left: 20px;
   }
   ```
5. 相邻同辈选择符
   用于选择位于某个元素后面，并于该元素拥有共同父元素的元素
   ```css
   h2 + p {
     font-size: 1.4em;
     font-weight: bold;
     color: #777;
   }
   ```
6. 通用选择符
   通用选择符可以匹配任何元素，以`*`表示
   ```css
   * {
     padding: 0;
     margin: 0;
   }
   ```
7. 伪元素
   `::first-letter`伪元素用于选择一段文本的第一个字符，`::first-line`用于选择一段文本的第一行。
   分别使用`::before`和`::after`表示在内容开头和末尾处假想的元素，如利用`::before`实现宽高相等
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
8. 伪类
   伪类可以基于文档结构以外的情形来为页面添加样式，比如基于超链接或表单元素的状态。伪类选择符以`:`开头，用于选择元素的特定状态或关系。如常见的用于超链接的伪类：
   ```css
   a:link {
     color: blue;
   }
   a:visited {
     color: green;
   }
   a:hover,a:focus {
     color: red;
   }
   a:active {
     color: purple;
   }
   ```
   8.1 结构化伪类  
   CSS3新增了一批与文档结果有关的新伪类。其中最常用的是`:nth-child`选择符，可以用来交替地为表格行应用样式.`:first-child`和`:last-child`也经常被使用
    ```css
    tr:nth-child(odd) {
      background: yellow;
    }
    tr:nth-child(3) {
      background: yellow;
    }
    tr:nth-child(3n+4) {
      background: yellow;
    }
    ```

      