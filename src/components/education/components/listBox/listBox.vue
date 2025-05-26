<template>
    <div class="dynamic-data-list" :class="{ 'is-bordered': bordered }">
        <LcElasticScrollbar>
            <NGrid :x-gap="gap" :cols="cols">
                <NGi v-for="(row, rowIndex) in rows" :key="`row-${rowIndex}`" class="list-row" :style="getRowStyle(rowIndex)">
                    <div class="key-cell" :style="getKeyCellStyle(rowIndex)">
                        {{ row.indicatorName }}
                    </div>
                    <div class="value-cell" :style="getValueCellStyle(rowIndex)">
                        {{ row.indicatorValue }}
                    </div>
                </NGi>
            </NGrid>
        </LcElasticScrollbar>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties } from "vue";
import type { DataListProps, ColumnStyle } from "./props";
import { NGrid, NGi } from "naive-ui";
import { LcElasticScrollbar } from "@/components/education/components/elasticScrollbar";
const {
    rows = [],
    rowStyle = {},
    bordered = false,
    keyStyle = {},
    valueStyle = {},
    cellPadding = "12px 15px",
    defaultAlign = "left",
    gap = 0,
    cols = 2,
} = defineProps<DataListProps>();

// 获取键单元格样式
const getKeyCellStyle = (index: number): ColumnStyle => {
    const style: ColumnStyle = {
        whiteSpace: "pre",
        flex: 3,
        backgroundColor: "#063B6B",
        ...keyStyle,
        padding: cellPadding || "12px 15px",
        textAlign: keyStyle.textAlign || "left",
        ...(rows[index]?.keyStyle || {}),
    };

    if (bordered) {
        style.borderLeft = "1px solid #07467a";
        style.borderTop = "1px solid #07467a";
        style.borderBottom = "1px solid #07467a";
        if (index === rows.length - 1) {
            style.borderRight = "1px solid #07467a";
        }
    }

    return style;
};

// 获取值单元格样式
const getValueCellStyle = (index: number): ColumnStyle => {
    const style: ColumnStyle = {
        whiteSpace: "pre",
        flex: 6,
        backgroundColor: "#063661",
        ...valueStyle,
        padding: cellPadding || "12px 15px",
        textAlign: valueStyle.textAlign || "left",
        ...(rows[index]?.valueStyle || {}),
    };

    if (bordered) {
        style.borderTop = "1px solid #07467A";
        style.borderBottom = "1px solid #07467A";
        style.borderRight = "1px solid #07467A";
        style.borderLeft = "1px solid #07467A";
    }

    return style;
};

// 获取行样式
const getRowStyle = (index: number): CSSProperties => {
    const style: CSSProperties = {
        display: "flex",
        width: "100%",
    };

    if (index % 2 === 0 && rowStyle.even) {
        Object.assign(style, rowStyle.even);
    } else if (index % 2 !== 0 && rowStyle.odd) {
        Object.assign(style, rowStyle.odd);
    }

    return style;
};
</script>

<style lang="scss" scoped>
.dynamic-data-list {
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    :deep(.lc-elastic-scrollbar){
        height: 100%;
    }
    .list-body {
        min-width: fit-content;

        .list-row {
            .key-cell,
            .value-cell {
                box-sizing: border-box;
                word-break: break-word;
                flex-shrink: 0;
            }

            .key-cell {
                font-weight: bold;
            }
        }
    }
}
</style>
