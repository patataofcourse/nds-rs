initSidebarItems({"fn":[["irq_disable","Disable the interrupts specified in `irq`. OR different flags to disable many interrupts at once."],["irq_enable","Enable the interrupts specified in `irq`. OR different flags to enable many interrupts at once."],["swi_intr_wait","Waits until one of the interrupts specified in `flags` is fired. If that interrupt happened, but hasn’t been processed yet, then `swi_intr_wait` returns immediatly only if `wait_for_next` is `false`."],["swi_wait_for_v_blank","Waits until the next VBlank. (Same as `swi_intr_wait(Flags::VBLANK, true)`."]],"mod":[["registers",""]],"struct":[["Flags",""]]});