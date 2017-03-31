import React from "react";

import styles from "./style.less";
import { Carousel, Flex, Button, List } from "antd-mobile";
// import fetch from "srcDir/common/model/itemModel/fetch";

const banner = require("srcDir/images/banner.png");

// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);


  return (
    <div>
      <Flex className={styles.header}>
        <Flex.Item>
        北京
        </Flex.Item>
        <Flex.Item>
        关于我们
        </Flex.Item>
      </Flex>
      <Carousel
        className="my-carousel" autoplay={0} infinite selectedIndex={0} dots={false}
        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        // afterChange={index => console.log("slide to", index)}
      >
        <a key={"AiyWuByWklrrUDlFignR"} >
          <img
            className={styles.swiperimg}
            alt="pic"
            src={banner}
          />
        </a>
        <a key={"TekJlZRVCjLFexlOCuWn"} >
          <img
            className={styles.swiperimg}
            alt="pic"
            src={"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=74255388,1481111428&fm=23&gp=0.jpg"}
          />
        </a>
        <a key={"AiyWuByWklrrUDlFignR"} >
          <img
            className={styles.swiperimg}
            alt="pic"
            src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490607688875&di=214ea0c9f73d2c6c081b10c0b296243a&imgtype=0&src=http%3A%2F%2Fpic33.nipic.com%2F20130927%2F6400131_130359365000_2.jpg"}
          />
        </a>
      </Carousel>
      <Flex justify="around" className={styles.buttons}>
        <Button className={styles.button} inline />
        <Button className={styles.button} inline />
        <Button className={styles.button} inline />
      </Flex>
      <List>
        <List.Item wrap>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
