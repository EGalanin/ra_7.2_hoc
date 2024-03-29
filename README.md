Подсвечивание блоков

[![Build status](https://ci.appveyor.com/api/projects/status/9448cajcau2x0au5?svg=true)](https://ci.appveyor.com/project/EGalanin/ra-7-2-hoc)

![CI](https://github.com/EGalanin/ra_7.2_hoc/actions/workflows/web.yml/badge.svg)

[Github Pages](https://egalanin.github.io/ra_7.2_hoc/ "Ссылка на Github Pages")

===

На нашем сайте есть блоки со статьями и с видеозаписями. 

![Highlight](./assets/highlight.png)

Мы решили улучшить отображение наших блоков таким образом, чтобы популярные статьи и видео, у которых 1000+ прочтений или просмотров,
оборачивались в компонент `Popular`, а с количеством до 100 — в компонент `New`. Эти компоненты будут менять внешний облик блоков, привлекая внимание посетителей.

## Реализация

Используя HOC, обернуть `Video` и `Article` таким образом, чтобы при отображении в компоненте `List` они помещались внутрь требуемого компонента `Popular` или `New`.

Воспользуйтесь готовым файлом `App.js` и стилями `css/index.css` из каталога в качестве отправной точки. Замените ими те, что создаются в create-react-app.
