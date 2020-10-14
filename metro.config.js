module.exports = {
  resolver: {
    assetExts: ["db", "mp3", "ttf", "obj", "png", "jpg", "gltf", "glb"],
  },
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  },
};
