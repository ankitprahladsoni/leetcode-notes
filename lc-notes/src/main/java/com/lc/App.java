package com.lc;

import java.util.*;

public class App {

    public static void main(String[] args) {
        var a = "Hello world";
        System.out.println(a);
    }

    public int longestConsecutive(int[] nums) {

        Set<Integer> set = new HashSet<>();
        for (int n : nums) {
            set.add(n);
        }
        int ans = 0;
        for (int n : nums) {
            if (!set.contains(n - 1)) {
                int y = n + 1;
                while (set.contains(y)) {
                    y++;
                }
                ans = Math.max(ans, y - n);
            }
        }
        return ans;
    }

}
