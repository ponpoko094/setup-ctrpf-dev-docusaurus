/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    'intro',
    {
      type: 'category',
      label: '仮想環境の構築 (任意)',
      items: [
        'virtual-dev-setup/windows10-iso-download',
        'virtual-dev-setup/vmware-install',
        'virtual-dev-setup/vmware-windows10-run',
        'virtual-dev-setup/vmware-tools-install'
      ]
    },
    {
      type: 'category',
      label: 'CTRPFの開発環境を構築する',
      items: [
        'ctrpf-dev-setup/preparation',
        'ctrpf-dev-setup/devkitpro-install',
        'ctrpf-dev-setup/libctrpf-install',
        'ctrpf-dev-setup/3gxtool-install',
        'ctrpf-dev-setup/ctrpf-source-download'
      ]
    },
    'VSCode-setup',
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
