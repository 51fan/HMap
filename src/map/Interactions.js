/**
 * Created by FDD on 2017/9/18.
 * @desc 交互工具相关
 */
import ol from 'openlayers'
import { config } from '../utils/config'
import * as utils from '../utils/utils'
import PointerEvents from '../interaction/PointerEvents'
class _Interactions {
  _addInteractions (params) {
    let options = Object.assign(config.INTERACTIONS, (params || {}))
    let interactions = []
    if (options) {
      for (let key in options) {
        if (key && options[key]) {
          this['add' + (utils.upperFirstChart(key))](options[key], interactions)
        }
      }
    }
    return interactions
  }

  /**
   * 双击缩放交互
   * @param options
   * @param interactions
   */
  addDoubleClickZoom (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.DoubleClickZoom({
      delta: options.zoomDelta,
      duration: options.zoomDuration
    }))
  }

  /**
   * 鼠标滚轮交互
   * @param options
   * @param interactions
   */
  addMouseWheelZoom (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.MouseWheelZoom({
      constrainResolution: options.constrainResolution,
      duration: options.zoomDuration
    }))
  }

  /**
   * 键盘交互
   * @param options
   * @param interactions
   */
  addKeyboard (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.KeyboardPan())
    interactions.push(new ol.interaction.KeyboardZoom({
      delta: options.zoomDelta,
      duration: options.zoomDuration
    }))
  }

  /**
   * 旋转快捷交互
   * @param options
   * @param interactions
   */
  addAltShiftDragRotate (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.DragRotate())
  }

  /**
   * 缩放快捷交互
   * @param options
   * @param interactions
   */
  addShiftDragZoom (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.DragZoom({
      duration: options.zoomDuration
    }))
  }

  /**
   * 拖拽漫游
   * @param options
   * @param interactions
   */
  addDragPan (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.DragPan({
      kinetic: (new ol.Kinetic(-0.005, 0.05, 100))
    }))
  }

  /**
   * 旋转
   * @param options
   * @param interactions
   */
  addPinchRotate (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.PinchRotate())
  }

  /**
   * 缩放
   * @param options
   * @param interactions
   */
  addPinchZoom (options = {}, interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new ol.interaction.PinchZoom({
      constrainResolution: options.constrainResolution,
      duration: options.zoomDuration
    }))
  }

  /**
   * 添加缩放按钮
   * @param interactions
   * @private
   */
  addPointEvents (interactions) {
    if (!interactions) {
      interactions = this.map.getInteractions()
    }
    interactions.push(new PointerEvents())
  }
}
export default _Interactions
