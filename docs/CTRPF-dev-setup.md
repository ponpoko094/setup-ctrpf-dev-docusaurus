# CTRPFの開発環境を構築する

## 前準備

### Nanquitas's Playgroundに参加する

※必要なファイルをダウンロードするために、Discordサーバーの[Nanquitas's Playground](https://discord.gg/z4ZMh27)に参加してください。

1. ユーザー名を入力して**はい**をクリック。

    ![./img/README_2022-03-13-12-02-33.png](./img/README_2022-03-13-12-02-33.png)

1. 私は人間ですにチェックを入れる。

1. なんとかして解く

    ![./img/README_2022-03-13-12-03-39.png](./img/README_2022-03-13-12-03-39.png)

1. 生年月日を入力して**完了**をクリック。

    ![./img/README_2022-03-13-12-04-32.png](./img/README_2022-03-13-12-04-32.png)

1. バツマークをクリック

    ![./img/README_2022-03-13-12-04-59.png](./img/README_2022-03-13-12-04-59.png)

    以上でサーバーに参加できました。

### 7-zipのインストール

必要なファイルがtar.bz2という拡張子で配布されていて、デフォルトのままだと展開できないため、7-zipをインストールしてください。

1. [7-zip](https://sevenzip.osdn.jp/)にアクセス。

1. 一番上の**ダウンロード**をクリックし、開く。

    ![./img/README_2022-03-13-12-27-17.png](./img/README_2022-03-13-12-27-17.png)

1. **Install**をクリック。

    ![./img/README_2022-03-13-12-28-32.png](./img/README_2022-03-13-12-28-32.png)

1. **Close**をクリック。

    ![./img/README_2022-03-13-12-28-52.png](./img/README_2022-03-13-12-28-52.png)

    以上で7-zipのインストールが完了しました。

### エクスプローラーの設定

1. エクスプローラーを開く。

1. 表示タブをクリック。

    ![./img/README_2022-03-13-12-54-02.png](./img/README_2022-03-13-12-54-02.png)

1. 以下の設定にする。

- 項目チェックボックスにチェックを入れない
- ファイル名拡張子にチェックを入れる
- 隠しファイルにチェックを入れる

    ![./img/README_2022-03-13-12-55-01.png](./img/README_2022-03-13-12-55-01.png)

    以上でエクスプローラーの設定が完了しました。

## devkitProのインストール

1. Microsoft Edgeをダブルクリック。

    ![./img/README_2022-03-13-11-27-35.png](./img/README_2022-03-13-11-27-35.png)

1. **devkitpro**と検索。

    ![./img/README_2022-03-13-11-28-28.png](./img/README_2022-03-13-11-28-28.png)

1. **Releases・devkitPro/installer・GitHub**をクリック。

    ![./img/README_2022-03-13-11-29-19.png](./img/README_2022-03-13-11-29-19.png)

1. **devkitProUpdater-3.0.3.exe**をクリックし、ダウンロード。

   ![./img/README_2022-03-13-11-30-46.png](./img/README_2022-03-13-11-30-46.png)

1. ダウンロードが完了したら開く。

    ![./img/README_2022-03-13-11-31-46.png](./img/README_2022-03-13-11-31-46.png)

1. **Next**をクリック。

    ![./img/README_2022-03-13-11-32-17.png](./img/README_2022-03-13-11-32-17.png)

1. **Next**をクリック。

    ![./img/README_2022-03-13-11-32-42.png](./img/README_2022-03-13-11-32-42.png)

1. **Next**をクリック。

    ![./img/README_2022-03-13-11-33-51.png](./img/README_2022-03-13-11-33-51.png)

1. **Next**をクリック。

    ![./img/README_2022-03-13-11-34-19.png](./img/README_2022-03-13-11-34-19.png)

1. **Next**をクリック。

    ![./img/README_2022-03-13-11-34-41.png](./img/README_2022-03-13-11-34-41.png)

1. **Install**をクリック。

    ![./img/README_2022-03-13-11-35-02.png](./img/README_2022-03-13-11-35-02.png)

1. **Next**をクリック。

    ![./img/README_2022-03-13-12-07-29.png](./img/README_2022-03-13-12-07-29.png)

1. **Finish**をクリック。

    ![./img/README_2022-03-13-12-07-51.png](./img/README_2022-03-13-12-07-51.png)

    以上でdevkitProのインストールが完了しました。

## libctrpf-0.7.2のインストール

1. **info_releases**チャンネルをクリック。

    ![./img/README_2022-03-13-12-19-46.png](./img/README_2022-03-13-12-19-46.png)

1. **libctrpf-0.7.2.eee6105a.tar.bz2**をクリックし、ダウンロード。

    ![./img/README_2022-03-13-12-21-14.png](./img/README_2022-03-13-12-21-14.png)

1. ++win+e++キーを同時押しし、エクスプローラーを開く。

1. **ダウンロード**をクリック。

    ![./img/README_2022-03-13-12-32-49.png](./img/README_2022-03-13-12-32-49.png)

1. **libctrpf-0.7.2.eee6105a.tar.bz2を右クリックし、7-zip→展開…をクリック。

1. **OK**をクリック。

    ![./img/README_2022-03-13-12-35-17.png](./img/README_2022-03-13-12-35-17.png)

1. **libctrpf-0.7.2.eee6105a.tar**をダブルクリック。

    ![./img/README_2022-03-13-12-36-33.png](./img/README_2022-03-13-12-36-33.png)

1. **libctrpf-0.7.2.eee6105a.tar**を右クリックし、7-zip→展開…をクリック。

1. **OK**をクリック。

    ![./img/README_2022-03-13-12-38-04.png](./img/README_2022-03-13-12-38-04.png)

1. **libctrpf-0.7.2.eee6105a**をダブルクリック。

    ![./img/README_2022-03-13-12-38-49.png](./img/README_2022-03-13-12-38-49.png)

1. 2つのフォルダーを選択して、++ctrl+c++キーでコピー。

    ![./img/README_2022-03-13-12-39-49.png](./img/README_2022-03-13-12-39-49.png)

1. 左の欄の**PC**をクリック。

    ![./img/README_2022-03-13-12-31-17.png](./img/README_2022-03-13-12-31-17.png)

1. ローカルディスクをダブルクリック。

    ![./img/README_2022-03-13-23-49-52.png](./img/README_2022-03-13-23-49-52.png)

1. devkitProをダブルクリック。

    ![./img/README_2022-03-13-12-41-03.png](./img/README_2022-03-13-12-41-03.png)

1. ++ctrl+shift+n++キーで新規フォルダーを作成。名前は**libctrpf**にする。

    ![./img/README_2022-03-13-12-45-34.png](./img/README_2022-03-13-12-45-34.png)

1. libctrpfをダブルクリック。

    ![./img/README_2022-03-13-12-45-58.png](./img/README_2022-03-13-12-45-58.png)

1. ++ctrl+v++キーで貼り付ける。

    ![./img/README_2022-03-13-12-46-47.png](./img/README_2022-03-13-12-46-47.png)

    以上でlibctrpfのインストールが完了しました。

## 3gxtool.exeのインストール

1. 3gxtool.exeをクリックし、ダウンロード。

    ![./img/README_2022-03-13-12-49-29.png](./img/README_2022-03-13-12-49-29.png)

1. 3gxtool.exeを選択し、++ctrl+c++でコピー。

    ![./img/README_2022-03-13-12-50-49.png](./img/README_2022-03-13-12-50-49.png)

1. PC→ローカルディスク→devkitPro→tools→binをダブルクリック。

    ![./img/README_2022-03-13-12-52-10.png](./img/README_2022-03-13-12-52-10.png)

1. ++ctrl+v++で貼り付ける。

    ![./img/README_2022-03-13-12-52-40.png](./img/README_2022-03-13-12-52-40.png)

    以上で3gxtool.exeのインストールが完了しました。

## CTRPFソースのダウンロード

1. **CTRPluginFramework-BlankTemplate**をクリック。

    ![./img/README_2022-03-13-13-19-02.png](./img/README_2022-03-13-13-19-02.png)

1. 緑色のCodeをクリック、Download ZIPをクリックし、ダウンロード。

    ![./img/README_2022-03-13-13-19-59.png](./img/README_2022-03-13-13-19-59.png)

1. ダウンロードフォルダーを開いて、**CTRPluginFramework-BlankTemplate-master.zip**を右クリックし、7-zip→展開…で展開をする。

1. **CTRPluginFramework-BlankTemplate-master**の中にもう1つ同名のフォルダーがあるので、それをコピーする。

    ![./img/README_2022-03-13-13-27-33.png](./img/README_2022-03-13-13-27-33.png)

1. PC→ローカルディスク→ユーザー→ユーザー名→を開き、Programという名前でフォルダーを作る。

    ![./img/README_2022-03-13-13-23-49.png](./img/README_2022-03-13-13-23-49.png)

1. Programの中にCTRPFという名前でフォルダーを作る。

    ![./img/README_2022-03-13-13-24-43.png](./img/README_2022-03-13-13-24-43.png)

1. CTRPFの中に**CTRPluginFramework-BlankTemplate-master**をコピーする。

    ![./img/README_2022-03-13-13-30-16.png](./img/README_2022-03-13-13-30-16.png)

    以上でCTRPFのソースのダウンロードが完了しました。
