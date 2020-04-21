/** 数组转换为tree数据 */
export const arrayToTree = source => {
  let cloneData = [...source];
  return cloneData.filter(father => {
    let branchArr = cloneData.filter(child => father['GROUP_ID'] === child['PARENT_GROUP_ID']);
    father['children'] = branchArr.length > 0 ? branchArr : [];
    // 边界条件根据实际情况修改: undefined null -1等
    return father['PARENT_GROUP_ID'] === -1 || father['PARENT_GROUP_ID'] === undefined;
  });
};

/** tree数据压平为数组 */
export const tree2Arr = data => {
  let arr = [];
  let tempData = [...data];
  const spread = (tempData = []) => {
    tempData.forEach(el => {
      if (el.children && el.children.length > 0) {
        spread(el.children);
      };
      el.children = [];
      arr.push(el);
    })
  }
  spread(tempData);
  return arr;
}

/**转换时长为hh:mm:ss */
export const transformTime = (time, unit) => {
  let fill0 = (num) => {
    return String(num).length <= 1 ? `0${num}` : num;
  }
  let hour = '00';
  let minute = '00';
  let second = '00';
  //毫秒
  if (unit == 'ms') {
    hour = parseInt(time / 1000 / 60 / 60);
    minute = parseInt((time - hour * 1000 * 60 * 60) / 1000 / 60);
    second = Math.ceil((time - hour * 1000 * 60 * 60 - 1000 * 60 * minute) / 1000);
  }
  if (unit == 's') {
    hour = parseInt(time / 60 / 60);
    minute = parseInt((time - hour * 60 * 60) / 60);
    second = Math.ceil((time - hour * 60 * 60 - 60 * minute));
  }
  return `${fill0(hour)}:${fill0(minute)}:${fill0(second)}`
}

/** 合并参数，先求交集，再求补集，然后合并 */
export function getDifferenceSetB(arr1, arr2) {
  let arr = [...arr2].filter(x => [...arr1].some(y => y.input === x.input)); //arr1和arr2的交集，取arr2中的值
  //补集:arr1中每一项都不在arr2中
  let test = arr1.reduce(function (pre, cur) { //arr1中arr2中不存在的
    if (arr2.every(item => item.input !== cur.input)) {
      pre.push(cur)
    }
    return pre;
  }, []);
  let result = arr.concat(test);
  return result;
}

/** 匹配字符串中占位符{*}中的值 */
export const getInputParam = (data) => {
  let pattern = /\$\{(.*?)\}/gm;
  let result = [];
  let arr;
  while ((arr = pattern.exec(data)) != null) {
    let temp = arr[1];
    result.push(temp);
  }
  let final = Array.from(new Set(result));
  return final;
}

/** 阻止事件冒泡 */
function stopBubble(e) {
  //如果提供了事件对象，则这是一个非IE浏览器 
  if (e && e.stopPropagation) {
    //因此它支持W3C的stopPropagation()方法 
    e.stopPropagation();
  } else {
    //否则，我们需要使用IE的方式来取消事件冒泡 
    window.event.cancelBubble = true;
  }
}

/** 阻止浏览器的默认行为  */
function stopDefault(e) {
  //阻止默认浏览器动作(W3C) 
  if (e && e.preventDefault) {
    e.preventDefault();
    //IE中阻止函数器默认动作的方式 
  } else {
    window.event.returnValue = false;
  }
  return false;
}