<template>
    <li>
        <span>{{ account }}</span>
        <font-awesome-icon icon="pencil-alt" />
        <font-awesome-icon icon="trash-alt" @click="deleteAcc(index)" />
    </li>
</template>
<script>
    export default {
        props:["account","deleteAcc","index"]
    }
</script>

