import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    base: '/Mobile_develop/',
    theme: defaultTheme({
        navbar: [
            {
                text: "Пособие",
                children: [
                    'document/part1.md',
                    'document/part2.md'
                ]
            },
            {
                text: "Тесты",
                children: [
                    'tests/part1.test.md',
                ]
            },
        ],

    })

})